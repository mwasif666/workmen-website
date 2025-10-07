import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import { Upload, message } from "antd";
import "./UploadFile.css";

const UploadFile = ({ onUpload }) => {
  const uploadProps = {
    multiple: true,
    listType: "picture",
    beforeUpload: (file) => {
      return false;
    },
    onChange(info) {
      const files = info.fileList.map((f) => f.originFileObj).filter(Boolean);
      onUpload(files); 

      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className="upload-container mb-3">
      <div className="upload-card">
        <Upload.Dragger {...uploadProps} className="custom-upload">
          <div className="upload-content">
            <div className="upload-icon">
              <InboxOutlined />
            </div>
            <h3>Click or drag files to upload</h3>
            <p>Support for single or bulk upload</p>
          </div>
        </Upload.Dragger>
      </div>
    </div>
  );
};

export default UploadFile;
