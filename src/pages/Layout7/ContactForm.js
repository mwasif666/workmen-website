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
    id: "",
    parent_service_id: "",
    moving_from: "",
    moving_to: "",
    preferred_datetime: "",
    problem: "",
    images: [],
  });

  const [errors, setErrors] = useState({});
  const [parentServices, setParentServices] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serviceLoading, setServiceLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "parent_service_id") {
      const parsed = value === "" ? "" : Number(value);
      setFormData((prev) => ({ ...prev, parent_service_id: parsed, id: "" }));
      setServices([]);
      setErrors((prev) => ({ ...prev, [name]: "" }));
      return;
    }

    if (name === "id") {
      const parsed = value === "" ? "" : Number(value);
      setFormData((prev) => ({ ...prev, id: parsed }));
      setErrors((prev) => ({ ...prev, [name]: "" }));
      return;
    }

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
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
    if (!formData.id) newErrors.id = "Category is required";
    if (!formData.parent_service_id) newErrors.parent_service_id = "Service is required";
    if (formData.parent_service_id === 2) {
      if (!formData.address) newErrors.address = "Address is required";
    } else if (formData.parent_service_id === 1) {
      if (!formData.moving_from)
        newErrors.moving_from = "Moving from address is required";
      if (!formData.moving_to)
        newErrors.moving_to = "Moving to address is required";
    }
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
          if(key === 'id'){
            data.append('service_id', formData[key]);
          }
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
        id: "",
        parent_service_id: "",
        moving_from: "",
        moving_to: "",
        preferred_datetime: "",
        problem: "",
        images: [],
      });
      setErrors({});
    } catch (error) {
       message.success("Service booked successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        id: "",
        parent_service_id: "",
        moving_from: "",
        moving_to: "",
        preferred_datetime: "",
        problem: "",
        images: [],
      });
      setErrors({});
    }
  };

  const fetchParentServices = async () => {
    try {
      const response = await axios.get(
        "https://dashboard.workmentogo.ca/getAllParentServices"
      );
      const list = (response.data.data || []).map((it) => ({
        ...it,
        id:
          it.id === "" || it.id === null || it.id === undefined
            ? ""
            : Number(it.id),
      }));
      setParentServices([{ name: "Select service", id: "" }, ...list]);
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchServices = async () => {
    try {
      setServiceLoading(true);
      const response = await axios.get(
        `https://dashboard.workmentogo.ca/getAllServices/${formData.parent_service_id}`
      );
      const list = (response.data.data || []).map((it) => ({
        ...it,
        id:
          it.id === "" || it.id === null || it.id === undefined
            ? ""
            : Number(it.id),
      }));
      setServices([{ name: "Select category", id: "" }, ...list]);
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setServiceLoading(false);
    }
  };

  useEffect(() => {
    if (formData.parent_service_id) {
      fetchServices();
    }
  }, [formData.parent_service_id]);

  useEffect(() => {
    fetchParentServices();
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
              <Form.Label>Service</Form.Label>
              <Form.Select
                name="parent_service_id"
                value={formData.parent_service_id}
                onChange={handleChange}
                className={errors.parent_service_id ? "is-invalid" : ""}
              >
                {parentServices && parentServices.length <= 1 ? (
                  <option>No Services found</option>
                ) : (
                  parentServices?.map((item) => (
                    <option key={item?.id} value={item?.id}>
                      {item?.name}
                    </option>
                  ))
                )}
              </Form.Select>
              {errors.parent_service_id && (
                <div className="invalid-feedback">{errors.parent_service_id}</div>
              )}
            </div>

            <div className="col-md-6 mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="id"
                value={formData.id}
                onChange={handleChange}
                className={errors.id ? "is-invalid" : ""}
                disabled={!formData.parent_service_id}
              >
                {serviceLoading ? (
                  <option>Loading categories...</option>
                ) : services && services.length <= 1 ? (
                  <option>No Categories found</option>
                ) : (
                  services?.map((item) => (
                    <option key={item?.id} value={item?.id}>
                      {item?.name}
                    </option>
                  ))
                )}
              </Form.Select>
              {errors.id && <div className="invalid-feedback">{errors.id}</div>}
            </div>

            {formData.parent_service_id === 2 && (
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
            )}

            {formData.parent_service_id === 1 && (
              <>
                <div className="col-md-6 mb-3">
                  <Form.Label>Moving From</Form.Label>
                  <Form.Control
                    type="text"
                    name="moving_from"
                    value={formData.moving_from}
                    onChange={handleChange}
                    className={errors.moving_from ? "is-invalid" : ""}
                    placeholder="e.g. House #12, Street 4 (Home or Office Address)"
                  />

                  {errors.moving_from && (
                    <div className="invalid-feedback">{errors.moving_from}</div>
                  )}
                </div>

                <div className="col-md-6 mb-3">
                  <Form.Label>Moving To</Form.Label>
                  <Form.Control
                    type="text"
                    name="moving_to"
                    value={formData.moving_to}
                    onChange={handleChange}
                    className={errors.moving_to ? "is-invalid" : ""}
                    placeholder="e.g. House #12, Street 4 (Home or Office Address)"
                  />

                  {errors.moving_to && (
                    <div className="invalid-feedback">{errors.moving_to}</div>
                  )}
                </div>
              </>
            )}

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
