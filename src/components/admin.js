import { useRef, useState } from "react";
import Image from "next/image";

const Admin = () => {
    const [profileImgSrc, setProfileImgSrc] = useState("/gravatar.jpeg");
    const fileInputRef = useRef(null);

    // Handle Change button click
    const handleChangeClick = () => {
        fileInputRef.current.click();
    };

    // Handle file selection
    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            // Read and preview the selected file
            reader.onload = (e) => {
                setProfileImgSrc(e.target.result);
            };

            reader.readAsDataURL(file);
        }
    };

    // Handle Remove button click
    const handleRemoveClick = () => {
        setProfileImgSrc("/gravatar.jpeg");
    };

    return (
        <div>
            <div className="container">
                <h2>Account Information</h2>
                <div className="profile-picture-section">
                    <div className="profile-picture-container">
                        <Image
                            id="profile-img"
                            src={profileImgSrc}
                            alt="Profile Picture"
                            width={500}
                            height={500}
                        />
                        <div className="button-group">
                            <button
                                id="change-btn"
                                className="btn"
                                onClick={handleChangeClick}
                            >
                                Add
                            </button>
                            <button
                                id="remove-btn"
                                className="btn btn-danger"
                                onClick={handleRemoveClick}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                    <input
                        type="file"
                        id="file-input"
                        accept="image/*"
                        style={{ display: "none" }}
                        ref={fileInputRef}
                        onChange={handleFileChange}
                    />
                </div>
                <form id="profile-form">
                    <div className="form-group">
                        <label htmlFor="full-name">Full Name</label>
                        <input
                            type="text"
                            id="full-name"
                            name="full-name"
                            placeholder="Enter full name"
                            required
                        />
                    </div>
                    <div className="form-container">
                        <div className="first-form-group">
                            <label htmlFor="gender">Gender</label>
                            <select id="gender" name="gender" required>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="first-form-group">
                            <label htmlFor="courses">Courses</label>
                            <select id="courses" name="courses" required>
                                <option value="">Select a Course</option>
                                <option value="software-engineering">Software Engineering</option>
                                <option value="data-analytics">Data Analytics</option>
                                <option value="digital-marketing">Digital Marketing</option>
                                <option value="photography">Photography</option>
                            </select>
                        </div>
                    </div>
                    <div></div>
                    <div className="third-form-container">
                        <div className="first-form-group">
                            <label htmlFor="batches">Batches</label>
                            <select name="batches" id="batches" required>
                                <option value="">Select a Batch</option>
                                <option value="batch-a">Batch A</option>
                                <option value="batch-b">Batch B</option>
                                <option value="batch-c">Batch C</option>
                            </select>
                        </div>
                        <div className="first-form-group">
                            <label htmlFor="portfolio-url">Portfolio URL</label>
                            <input
                                type="url"
                                id="portfolio-url"
                                name="portfolio-url"
                                placeholder="Enter portfolio URL"
                                required
                            />
                        </div>
                    </div>
                    <div className="second-form-container">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter email address"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone-number">Phone Number</label>
                            <input
                                type="tel"
                                id="phone-number"
                                name="phone-number"
                                placeholder="Enter phone number"
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" className="primary">
                        Save Profile
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Admin;
