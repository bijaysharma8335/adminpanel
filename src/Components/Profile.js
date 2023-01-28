import React, { useState } from "react";
import {
    Button,
    Card,
    Container,
    Form,
    Image,
    Row,
    Modal,
} from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import { FaAddressBook, FaBirthdayCake, FaEdit } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { GoDeviceMobile } from "react-icons/go";
import CountrySelect from "react-bootstrap-country-select";
import { useSelector, useDispatch } from "react-redux";
import { setProfile, getProfile } from "../Redux/reducers/slice/profileSlice";
import useNumberInput from "../CustomHooks/useNumber";

const Profile = ({ toggle }) => {
    const profile = useSelector(getProfile);
    const [country, setCountry] = useState({});
    const [img, setImg] = useState();

    const [authShow, setAuthShow] = useState(false);
    const [editProfileShow, setEditProfileShow] = useState(false);

    const dispatch = useDispatch();
    const { numberValidate } = useNumberInput();

    const handleClose = () => setEditProfileShow(false);
    const handleShow = () => setEditProfileShow(true);

    const changeHandler = (e) => {
        dispatch(setProfile({ ...profile, [e.target.name]: e.target.value }));
    };

    const countryHandler = (e, countryName) => {
        dispatch(setProfile({ ...profile, country: e.target.value }));
    };

    const onFileChange = (e) => {
        const file = e.target.files[0];
        if (file) setImg(URL.createObjectURL(file));
        dispatch(setProfile({ ...profile, profileImg: img }));
    };

    return (
        <Container fluid className={toggle ? "margin-0" : "margin-18rem"}>
            <div className={toggle ? "width-98vw" : "width-83vw"}>
                <h3>Admin Profile</h3>

                <hr />

                <Row>
                    <div className="col-md-4">
                        <Card className="my-1 p-2">
                            <div className="d-flex flex-row  justify-content-between ">
                                <span className="fw-bold ">Profile</span>
                                <FaEdit
                                    className="text-primary cursor "
                                    size="2em"
                                    onClick={handleShow}
                                />
                            </div>
                            <div className="text-center  my-2">
                                <Image
                                    src={profile.profileImg}
                                    width={50}
                                    height={50}
                                    className="cursor"
                                    style={{
                                        objectFit: "contain",
                                    }}
                                />
                                <Row>
                                    <span>ID : #CS-00002</span>
                                </Row>
                                <Row>
                                    <span className="fw-bold">
                                        {profile.name}
                                    </span>
                                </Row>

                                <span>24 years, California</span>
                            </div>
                            <p className=" mx-2 my-2">{profile.details}</p>
                            <div>
                                <GoDeviceMobile className="mx-2 my-2" />
                                <span className="mx-2 my-2">
                                    {profile.mobile}
                                </span>
                            </div>
                            <div>
                                <AiOutlineMail className="mx-2 my-2" />
                                <span className="mx-2 my-2">
                                    {profile.email}
                                </span>
                            </div>
                            <div>
                                <FaBirthdayCake className="mx-2 my-2" />
                                <span className="mx-2 my-2">
                                    {profile.birthDate}
                                </span>
                            </div>
                            <div>
                                <FaAddressBook className="mx-2 my-2" />
                                <span className="mx-2 my-2">
                                    {profile.address}
                                </span>
                            </div>
                        </Card>
                        <Card className="my-2 p-2">
                            <span className="fw-bold my-2">Payment Method</span>
                            <span className=" text-secondary my-2">
                                <FaCcVisa size="2em" className="mx-1 " />
                                Visa *******7548
                            </span>
                            <span>Next billing charged $48</span>
                            <div>
                                <i className="text-secondary">
                                    Auto Pay on July 20,2021
                                </i>
                                <span className=" mx-2 text-warning cursor">
                                    Edit Payment Info
                                </span>
                            </div>
                            <div className="my-2">
                                <Button> Add Payment Info</Button>
                            </div>
                        </Card>
                        <Card className="my-2 p-2">
                            <span>Notification Preferences</span>
                            <span className="text-secondary my-2">
                                Control all our newsletter and email related
                                notifications to your email
                            </span>
                            <span>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="Activity Notifications"
                                />
                            </span>
                            <span>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="Comment Notifications"
                                />
                            </span>
                            <span>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="Email Preferences"
                                    active
                                />
                            </span>
                        </Card>
                    </div>
                    <div className="col-md-8">
                        <Card className="my-1 p-3">
                            <div className="my-2 ">
                                <span className="fw-bold  ">
                                    Profile Settings
                                </span>
                            </div>
                            <Row>
                                <div className="col-6">
                                    <span className="fw-bold">User Name</span>
                                    <Form.Control
                                        type="text"
                                        className="my-2"
                                        name="username"
                                        onChange={changeHandler}
                                        value={profile.username}
                                    />
                                </div>

                                <div className="col-6">
                                    <span className="fw-bold">Password</span>
                                    <Form.Control
                                        type="password"
                                        className="my-2"
                                        name="password"
                                        onChange={changeHandler}
                                        value={profile.password}
                                    />
                                </div>
                            </Row>{" "}
                            <Row>
                                <div className="col-4">
                                    <span className="fw-bold">
                                        Company Name
                                        <span className="text-danger ms-1">
                                            *
                                        </span>
                                    </span>
                                    <Form.Control
                                        required
                                        type="text"
                                        className="my-2"
                                        name="cmpName"
                                        onChange={changeHandler}
                                        value={profile.cmpName}
                                    />
                                </div>

                                <div className="col-4">
                                    <span className="fw-bold">
                                        Mobile
                                        <span className="text-danger ms-1">
                                            *
                                        </span>
                                    </span>
                                    <Form.Control
                                        type="number"
                                        className="my-2 "
                                        name="mobile"
                                        onChange={changeHandler}
                                        value={profile.mobile}
                                        onKeyDown={numberValidate}
                                    />
                                </div>
                                <div className="col-4">
                                    <span className="fw-bold">
                                        Alternate Mobile
                                    </span>
                                    <Form.Control
                                        required
                                        type="number"
                                        className="my-2"
                                        name="altMobile"
                                        onChange={changeHandler}
                                        value={profile.altMobile}
                                        onKeyDown={numberValidate}
                                    />
                                </div>
                            </Row>
                            <div>
                                <span className="fw-bold">Email</span>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    onChange={changeHandler}
                                    value={profile.email}
                                    className="my-2"
                                />
                            </div>
                            <div>
                                <span className="fw-bold">Address</span>
                                <Form.Control
                                    as="textarea"
                                    className="my-2"
                                    name="address"
                                    onChange={changeHandler}
                                    value={profile.address}
                                />
                            </div>
                            <div>
                                <span className="fw-bold">Details</span>
                                <Form.Control
                                    as="textarea"
                                    className="my-2"
                                    name="details"
                                    onChange={changeHandler}
                                    value={profile.details}
                                />
                            </div>
                            <Row>
                                <div className="col-3">
                                    <span className="fw-bold">Country</span>
                                    <CountrySelect
                                        value={country}
                                        className="mt-2"
                                        name="address"
                                        onChange={(country, e) => {
                                            setCountry(country);
                                            countryHandler(e, country.name);
                                        }}
                                    />
                                </div>
                                <div className="col-3">
                                    <span className="fw-bold">State</span>
                                    <Form.Control
                                        type="text"
                                        className="my-2"
                                        name="state"
                                        onChange={changeHandler}
                                        value={profile.state}
                                    />
                                </div>
                                <div className="col-3">
                                    <span className="fw-bold">City</span>
                                    <Form.Control
                                        type="text"
                                        className="my-2"
                                        name="city"
                                        onChange={changeHandler}
                                        value={profile.city}
                                    />
                                </div>
                                <div className="col-3">
                                    <span className="fw-bold">Pin Code</span>
                                    <Form.Control
                                        type="number"
                                        className="my-2"
                                        name="pinCode"
                                        onChange={changeHandler}
                                        value={profile.pinCode}
                                        onKeyDown={numberValidate}
                                    />
                                </div>
                            </Row>
                            <div className="mx-1 my-2 ">
                                <Button
                                    onClick={() =>
                                        console.log("profile", profile)
                                    }
                                >
                                    Save
                                </Button>
                            </div>
                        </Card>

                        <Card className="my-2 p-2">
                            <div className="d-flex flex-row  justify-content-between ">
                                <span className="fw-bold ">
                                    Authentication Details
                                </span>
                                <FaEdit
                                    className="text-primary cursor "
                                    size="2em"
                                    onClick={() => setAuthShow(!authShow)}
                                />
                            </div>
                            <Row>
                                <div className="col-4">
                                    <span className="d-block  my-2">
                                        User Name :
                                    </span>
                                    <span className="d-block   my-2">
                                        Login Password :
                                    </span>
                                    <span className="d-block   my-2">
                                        Last Login:
                                    </span>
                                    <span className="d-block   my-2">
                                        Last Password change:
                                    </span>
                                </div>
                                <div className="col-4">
                                    <span className="d-block fw-bold my-2">
                                        {profile.username}
                                    </span>
                                    <span className="d-block fw-bold my-2">
                                        {profile.password}
                                    </span>
                                    <span className="d-block fw-bold my-2">
                                        128.456.89 (Apple) safari
                                    </span>
                                    <span className="d-block fw-bold my-2">
                                        3 Months Ago
                                    </span>
                                </div>
                            </Row>
                        </Card>
                    </div>
                </Row>
            </div>
            <Modal
                show={editProfileShow}
                onHide={handleClose}
                style={{ top: "61px" }}
            >
                <Modal.Header closeButton className="bg-light">
                    <Modal.Title className="fw-bold">Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-light p-2">
                    <div>
                        <span className="fw-bold">Name</span>
                        <Form.Control
                            type="text"
                            className="my-2"
                            name="name"
                            value={profile.name}
                            onChange={changeHandler}
                        />
                    </div>
                    <div>
                        <span className="fw-bold">Profile</span>
                        <Form.Control
                            type="file"
                            className="my-2"
                            name="profileImg"
                            // value={profile.profileImg}
                            onChange={(e) => {
                                onFileChange(e);
                            }}
                        />
                    </div>
                    <div>
                        <span className="fw-bold">Details</span>
                        <Form.Control
                            as="textarea"
                            className="my-2"
                            name="details"
                            value={profile.details}
                            onChange={changeHandler}
                        />
                    </div>
                    <Row>
                        <div className="col-6">
                            <span className="fw-bold">Country</span>
                            <Form.Control type="text" className="my-2" />
                        </div>
                        <div className="col-6">
                            <span className="fw-bold">Birthday Date</span>
                            <Form.Control
                                type="date"
                                className="my-2"
                                name="birthDate"
                                value={profile.birthDate}
                                onChange={changeHandler}
                            />
                        </div>
                    </Row>
                    <Row>
                        <div className="col-6">
                            <span className="fw-bold">Email</span>
                            <Form.Control
                                type="email"
                                name="email"
                                value={profile.email}
                                onChange={changeHandler}
                                className="my-2"
                            />
                        </div>
                        <div className="col-6">
                            <span className="fw-bold">Phone</span>
                            <Form.Control
                                type="number"
                                name="mobile"
                                value={profile.mobile}
                                onChange={changeHandler}
                                className="my-2"
                            />
                        </div>
                    </Row>
                    <div>
                        <span className="fw-bold">Address</span>
                        <Form.Control
                            as="textarea"
                            name="address"
                            value={profile.address}
                            onChange={changeHandler}
                            className="my-2"
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer className="bg-light">
                    <Button variant="secondary" onClick={handleClose}>
                        Done
                    </Button>
                    <Button variant="primary">Save</Button>
                </Modal.Footer>
            </Modal>

            <Modal
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={authShow}
                onHide={() => setAuthShow(!authShow)}
            >
                <Modal.Header closeButton className="bg-light">
                    <Modal.Title
                        id="contained-modal-title-vcenter"
                        className="fw-bold"
                    >
                        Edit Authentication
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-light p-2">
                    <Row>
                        <div className="col-6">
                            <span className="fw-bold">User Name</span>
                            <Form.Control
                                type="email"
                                className="my-2"
                                name="username"
                                value={profile.username}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="col-6">
                            <span className="fw-bold">Password</span>
                            <Form.Control
                                type="password"
                                className="my-2"
                                name="username"
                                onChange={changeHandler}
                            />
                        </div>
                    </Row>
                    <div className="my-2">
                        <span className="fw-bold">Confirm password</span>
                        <Form.Control type="password" className="my-2" />
                    </div>
                </Modal.Body>
                <Modal.Footer className="bg-light">
                    <Button
                        variant="secondary"
                        onClick={() => setAuthShow(!authShow)}
                    >
                        Done
                    </Button>
                    <Button variant="primary">Save</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default Profile;
