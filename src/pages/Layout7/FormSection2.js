import React, { useState } from "react";
import styles from "./QuoteSection.module.css";
import { Button, Form, Toast, ToastContainer } from "react-bootstrap";
import { Copy } from "../../component/Copy";

const FormSection2 = () => {
  const [showToast, setShowToast] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setShowToast(true);
    // Hide the toast after 3 seconds
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className={` mt-5 ${styles.FormSec}`}>
      <div className="row g-5 justify-content-center d-flex align-items-center">
        {/* Get A Quote */}
        <div className="col-12">
          <div
            className={styles.cardBox}
            style={{
              backgroundImage: "none",
            }}
          >
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-8">
                <div className={styles.cardContent}>
                  <h3 className="mb-3 text-center">Let's Connect</h3>

                  {/* Contact Information Section */}

                  <div className={`row ${styles.contactInfo}`}>
                    <div className="col-lg-12">
                      <div className={styles.FormQuote1}>
                        <div className="d-flex justify-content-between align-items-center mb-0">
                          <span className={styles.spanlabel}>Phone:</span>
                        </div>
                        <div className={styles.FormQuote}>
                          <span>+1(437)5877072710</span>
                          <button
                            className={styles.copyButton}
                            onClick={() => copyToClipboard("+1(437)5877072710")}
                          >
                            <Copy />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className={styles.FormQuote1}>
                      <div className="d-flex justify-content-between align-items-center mb-0">
                        <span className={styles.spanlabel}>Email:</span>
                      </div>
                      <div className={styles.FormQuote}>
                        <span>info@workmentogo.ca</span>
                        <button
                          className={styles.copyButton}
                          onClick={() => copyToClipboard("info@workmentogo.ca")}
                        >
                          <Copy />
                        </button>
                      </div>
                    </div>

                    <div className={styles.FormQuote1}>
                      <div className="d-flex justify-content-between align-items-center mb-0">
                        <span className={styles.spanlabel}>Address:</span>
                      </div>
                      <div className={styles.FormQuote}>
                        <span>Office address 4221, 23b street NE, T2E 7V9</span>
                        <button
                          className={styles.copyButton}
                          onClick={() =>
                            copyToClipboard(
                              "Office address 4221, 23b street NE, T2E 7V9"
                            )
                          }
                        >
                          <Copy />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1 }}>
        <Toast show={showToast} onClose={() => setShowToast(false)}>
          <Toast.Header>
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body>Text copied successfully!</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default FormSection2;
