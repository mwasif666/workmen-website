"use client";
import React, { useEffect, useState } from "react";
import styles from "./ContactForm.module.css";
import { Form, Button } from "react-bootstrap";
import { DatePicker, message } from "antd";
import axios from "axios";
import UploadFile from "./Upload";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    category_id: "",
    service_id: "",
    preferred_datetime: "",
    problem: "",
    images: [],
  });

  const [errors, setErrors] = useState({});
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });

    // If category changes, reset service_id and filter services
    if (name === "category_id") {
      setFormData((prev) => ({ ...prev, service_id: "" }));
      const filtered = services.filter(
        (service) => service.category_id === value
      );
      setFilteredServices(filtered);
    }
  };

  const onDateChange = (value, dateString) => {
    setFormData({ ...formData, preferred_datetime: dateString });
    setErrors({ ...errors, preferred_datetime: "" });
  };

  const handleFileUpload = (files) => {
    setFormData({ ...formData, images: files });
    setErrors({ ...errors, images: "" });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.category_id) newErrors.category_id = "Category is required";
    if (!formData.service_id) newErrors.service_id = "Service is required";
    if (!formData.preferred_datetime)
      newErrors.preferred_datetime = "Date & time required";
    if (!formData.problem) newErrors.problem = "Problem description required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      message.error("Please fill all required fields");
      return;
    }

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key === "images") {
          formData.images.forEach((file) => {
            data.append("images[]", file);
          });
        } else {
          data.append(key, formData[key]);
        }
      });

      const response = await axios.post(
        "https://dashboard.workmentogo.ca/save-request",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      message.success("Service booked successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        category_id: "",
        service_id: "",
        preferred_datetime: "",
        problem: "",
        images: [],
      });
      setErrors({});
      setFilteredServices([]);
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    const fetchCategoriesAndServices = async () => {
      try {
        // Fetch categories
        const categoriesResponse = await axios.get(
          "https://dashboard.workmentogo.ca/getAllCategories"
        );

        // Fetch services
        const servicesResponse = await axios.get(
          "https://dashboard.workmentogo.ca/getAllServices"
        );

        setCategories([
          { name: "Select category", id: "" },
          ...(categoriesResponse.data.data || []),
        ]);
        setServices(servicesResponse.data.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoriesAndServices();
  }, []);

  return (
    <div className={`${styles.contactSection} container`}>
      <div className="text-center mb-4">
        <h1 className={styles.heading}>Get In Touch</h1>
        <p className={styles.subText}>We're here to help you 24/7.</p>
      </div>

      <div className={`${styles.formCard} p-4`}>
        <Form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "is-invalid" : ""}
                placeholder="Name"
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>

            <div className="col-md-6 mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
                className={errors.phone ? "is-invalid" : ""}
              />
              {errors.phone && (
                <div className="invalid-feedback">{errors.phone}</div>
              )}
            </div>

            <div className="col-md-6 mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "is-invalid" : ""}
                placeholder="xyz@email.com"
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

            <div className="col-md-6 mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={errors.address ? "is-invalid" : ""}
                placeholder="e.g. House #12, Street 4 (Home or Office Address)"
              />

              {errors.address && (
                <div className="invalid-feedback">{errors.address}</div>
              )}
            </div>

            {/* Category Selection */}
            <div className="col-md-6 mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="category_id"
                value={formData.category_id}
                onChange={handleChange}
                className={errors.category_id ? "is-invalid" : ""}
              >
                {loading ? (
                  <option>Loading categories...</option>
                ) : categories && categories.length === 0 ? (
                  <option>No categories found</option>
                ) : (
                  categories?.map((item) => (
                    <option key={item?.id} value={item?.id}>
                      {item?.name}
                    </option>
                  ))
                )}
              </Form.Select>
              {errors.category_id && (
                <div className="invalid-feedback">{errors.category_id}</div>
              )}
            </div>

            {/* Services Dropdown - Only shows services from selected category */}
            <div className="col-md-6 mb-3">
              <Form.Label>Services</Form.Label>
              <Form.Select
                name="service_id"
                value={formData.service_id}
                onChange={handleChange}
                className={errors.service_id ? "is-invalid" : ""}
                disabled={!formData.category_id}
              >
                <option value="">Select service</option>
                {filteredServices && filteredServices.length === 0 ? (
                  <option>No services available for this category</option>
                ) : (
                  filteredServices?.map((item) => (
                    <option key={item?.id} value={item?.id}>
                      {item?.name}
                    </option>
                  ))
                )}
              </Form.Select>
              {errors.service_id && (
                <div className="invalid-feedback">{errors.service_id}</div>
              )}
            </div>

            <div className="col-md-12 mb-3">
              <Form.Label>Select a Date and Time</Form.Label>
              <DatePicker
                showTime
                onChange={onDateChange}
                className={`form-control ${
                  errors.preferred_datetime ? "is-invalid" : ""
                }`}
                style={{ width: "100%" }}
              />
              {errors.preferred_datetime && (
                <div className="invalid-feedback d-block">
                  {errors.preferred_datetime}
                </div>
              )}
            </div>

            <div className="col-12 mb-3">
              <Form.Label>Problem</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="problem"
                value={formData.problem}
                onChange={handleChange}
                placeholder="Describe your issue..."
                className={errors.problem ? "is-invalid" : ""}
              />
              {errors.problem && (
                <div className="invalid-feedback">{errors.problem}</div>
              )}
            </div>

            <UploadFile onUpload={handleFileUpload} />

            <div className="col-12 text-center">
              <Button type="submit" className={styles.submitBtn}>
                Book Services Now
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
