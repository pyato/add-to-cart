import "../assets/css/CheckOut.css";
import "../assets/css/BookCart.css";
import React, { useState } from 'react';
import TableOrderSummary from "../components/TableOrderSummary";
import kerry from "../assets/images/kerry.png";
import { BsCoin } from 'react-icons/bs';
import { GoCreditCard } from 'react-icons/go';

function CheckOut() {
    const [radioTransport, setRadioTransport] = useState(0);
    const [radioPayment, setRadioPayment] = useState(0);

    return (
        <div className="container">
            <div className="checkout-con">
                <div className="checkout-address">
                    <p>ชำระเงิน</p>
                    <p>ที่อยู่ในการจัดส่ง</p>
                    <div className="checkout-address-con">
                        <div className="checkout-twoinput">
                            <div className="checkout-input-con" style={{ marginRight: "10px" }}>
                                <span>ชื่อ</span>
                                <input type="text" />
                            </div>
                            <div className="checkout-input-con" style={{ marginLeft: "10px" }}>
                                <span>นามสกุล</span>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="checkout-oneinput">
                            <span>ประเทศ</span>
                            <input type="text" />
                        </div>
                        <div className="checkout-oneinput">
                            <span>
                                ที่อยู่
                                <span style={{ color: "red" }}>
                                    (บ้านเลขที่/หมู่บ้าน/ซอย/ถนน)
                                </span>
                            </span>
                            <input type="text" />
                        </div>
                        <div className="checkout-twoinput">
                            <div className="checkout-input-con" style={{ marginRight: "10px" }}>
                                <span>แขวง/ตำบล</span>
                                <input type="text" />
                            </div>
                            <div className="checkout-input-con" style={{ marginLeft: "10px" }}>
                                <span>เขต/อำเภอ</span>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="checkout-twoinput">
                            <div className="checkout-input-con" style={{ marginRight: "10px" }}>
                                <span>จังหวัด</span>
                                <input type="text" />
                            </div>

                            <div className="checkout-input-con" style={{ marginLeft: "10px" }}>
                                <span>รหัสไปรษณีย์</span>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="checkout-oneinput">
                            <span>เบอร์ติดต่อ(กรุณาระบุหมายเลขโทรศัพท์ เฉพาะตัวเลขเท่านั้น)</span>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="checkout-transport">
                        <p>เลือกขนส่ง</p>
                        <input
                            type="radio"
                            value={1}
                            checked={radioTransport == 1}
                            onChange={(e) => { setRadioTransport(e.target.value) }}
                            id="transport1"
                            style={{ display: "none" }}
                        />
                        <input
                            type="radio"
                            value={2}
                            checked={radioTransport == 2}
                            onChange={(e) => { setRadioTransport(e.target.value) }}
                            id="transport2"
                            style={{ display: "none" }}
                        />

                        <div className="radio-boxs">
                            <label for="transport1" className="radio-box">
                                <div className="radio-curcle"></div>
                                <div className="radio-text">
                                    <span>Free Shipping</span>
                                    <span>THB0.00</span>
                                </div>
                            </label>
                            <label for="transport2" className="radio-box">
                                <div className="radio-curcle"></div>
                                <div className="radio-text">
                                    <img src={kerry} style={{ width: "160px" }} />
                                    <span>THB40.00</span>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="checkout-payment">
                        <p>วิธีชำระเงิน</p>
                        <input
                            type="radio"
                            value={1}
                            checked={radioPayment == 1}
                            onChange={(e) => { setRadioPayment(e.target.value) }}
                            id="payment1"
                            style={{ display: "none" }}
                        />
                        <input
                            type="radio"
                            value={2}
                            checked={radioPayment == 2}
                            onChange={(e) => { setRadioPayment(e.target.value) }}
                            id="payment2"
                            style={{ display: "none" }}
                        />

                        <div className="radio-boxs">
                            <label for="payment1" className="radio-box">
                                <div className="radio-curcle"></div>
                                <div className="radio-text">
                                    <span style={{ display: "flex", alignItems: "center" }}>
                                        <BsCoin size={30} style={{ marginRight: "20px" }} />Cash
                                    </span>
                                </div>
                            </label>
                            <label for="payment2" className="radio-box">
                                <div className="radio-curcle"></div>
                                <div className="radio-text">
                                    <span style={{ display: "flex", alignItems: "center" }}>
                                        <GoCreditCard size={30} style={{ marginRight: "20px" }} />Credit/Debit
                                    </span>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <TableOrderSummary textBtn="ชำระเงิน"/>
            </div>
        </div>
    )
}

export default CheckOut;