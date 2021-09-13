import React, { useState } from 'react'
import styled from 'styled-components'
import staticcss from '../../Staticcss'
import Button from '../util/Button';

// redux
import { connect } from 'react-redux';
import { selectoption } from '../../Redux/Paymnet/Payment.Action';

const PaymentWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #eee;
  @media screen and (max-width: 468px) {
    height: unset;
  }
  .wrapper {
    max-width: 1300px;
    margin: 0 auto;
    padding: 5rem 10rem 5rem 20rem;
    @media screen and (max-width: 468px) {
      padding: 2rem;
    }
    .policy {
      margin-top: 3rem;
      span {
        font-size: ${staticcss.fontSize.Paymentpolicy};
      }
    }
    .buttoncontainer {
      margin-top: 2rem;
      @media screen and (max-width: 468px) {
        margin-bottom:10rem;
      }
    }
  }
  .payment {
    font-size: ${staticcss.fontSize.PaymentMainhead};
    text-transform: uppercase;
    @media screen and (max-width: 468px) {
      font-size: ${staticcss.fontSize.mobilePaymentMainhead};
      margin: 0;
      margin-top: 3rem;
    }
  }
  .Paycontainer {
    display: flex;
    flex-direction: row;
    width: 70%;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    @media screen and (max-width: 468px) {
      margin-top: 1rem;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    .billing {
      display: flex;
      flex-direction: column;
      h1 {
        font-size: ${staticcss.fontSize.Paymentselecthead};
        font-weight: 300;
        @media screen and (max-width: 468px) {
          font-size: ${staticcss.fontSize.mobilePaymentselecthead};
        }
      }
      .divider {
        display: flex;
        @media screen and (max-width: 468px) {
          flex-direction: column;
        }
        .col {
          display: flex;
          flex-direction: column;
          :last-child {
            margin-left: 8px;
            @media screen and (max-width: 468px) {
              margin-left: 0;
            }
          }
          input {
            width: 155px;
          }
        }
      }
      label {
        text-transform: uppercase;
        font-size: ${staticcss.fontSize.Paymentlabel};
        font-weight: bold;
        letter-spacing: 3px;
        margin-top: 1rem;
        margin-bottom: 5px;
        @media screen and (max-width: 468px) {
          font-size: ${staticcss.fontSize.mobilePaymentlabel};
        }
      }
      input {
        width: 330px;
        height: 40px;
        border: 2px solid black;
        border-radius: 3px;
        font-size: 24px;
        line-height: 24px;
        @media screen and (max-width: 468px) {
          width: 80vw;
          font-size: 14px;
        }
        &:active {
          color: #999;
          ::selection {
            background-color: #2f1fe9;
          }
        }
        &:focus {
          border: none;
          border-bottom: 4px solid #2f1fe9;
        }
      }
      select {
        width: 330px;
        height: 40px;
        border: 2px solid black;
        @media screen and (max-width: 468px) {
          width: 80vw;
        }
      }
    }
    .credit {
      display: flex;
      flex-direction: column;
      h1 {
        font-size: ${staticcss.fontSize.Paymentselecthead};
        font-weight: 300;
        @media screen and (max-width: 468px) {
          font-size: ${staticcss.fontSize.mobilePaymentselecthead};
          margin-top: 5rem;
        }
      }
      label {
        text-transform: uppercase;
        font-size: ${staticcss.fontSize.Paymentlabel};
        font-weight: bold;
        letter-spacing: 3px;
        margin-top: 1rem;
        margin-bottom: 5px;
        @media screen and (max-width: 468px) {
          font-size: ${staticcss.fontSize.mobilePaymentlabel};
        }
      }
      .divider {
        display: flex;
        @media screen and (max-width: 468px) {
          flex-direction: column;
        }
        .col {
          display: flex;
          flex-direction: column;
          :last-child {
            margin-left: 8px;
            @media screen and (max-width: 468px) {
              margin-left: 0;
            }
          }
          select {
            width: 165px;
          }
        }
      }
      input {
        width: 330px;
        height: 40px;
        border: 2px solid black;
        border-radius: 3px;
        font-size: 24px;
        line-height: 24px;
        @media screen and (max-width: 468px) {
          width: 80vw;
          font-size: 14px;
        }
        &:active {
          color: #999;
          ::selection {
            background-color: #2f1fe9;
          }
        }
        &:focus {
          border: none;
          border-bottom: 4px solid #2f1fe9;
        }
      }
      select {
        width: 330px;
        height: 40px;
        border: 2px solid black;
        @media screen and (max-width: 468px) {
          width: 80vw;
        }
        option {
          font-size: 24px;
        }
      }
    }
  }
  .selectplan {
    h2 {
      font-size: ${staticcss.fontSize.Paymentselecthead};
      font-weight: 300;
      @media screen and (max-width: 468px) {
        font-size: ${staticcss.fontSize.mobilePaymentselecthead};
      }
    }
    .paymentoption {
      display: flex;
      align-items: center;
      @media screen and (max-width: 468px) {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
      }

      .basic {
        font-size: ${staticcss.fontSize.Paymentselectoption};
        color: ${staticcss.color.PaymentColor1};
        text-transform: uppercase;
        font-weight: 800;
        margin-right: 2rem;
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        margin-right: 30px;
        @media screen and (max-width: 468px) {
          font-size: ${staticcss.fontSize.mobilePaymentselectoption};
          margin-bottom: 1rem;
        }
        input {
          display: none;
          &:checked + div::after {
            transform: scale(1.2);
          }
          &:checked + div {
            border: none;
          }
        }
        div {
          width: 1.25em;
          height: 1.25em;
          border: 2px solid black;
          border-radius: 50%;
          margin-right: 10px;
          box-sizing: border-box;
          padding: 2px;
          transition: all 0.3s ease-in-out;
          ::after {
            content: '';
            width: 100%;
            height: 100%;
            display: block;
            background-color: ${staticcss.color.PaymentColor1};
            border-radius: 50%;
            transform: scale(0);
          }
        }
      }
      .advanced {
        font-size: ${staticcss.fontSize.Paymentselectoption};
        color: ${staticcss.color.PaymentColor2};
        text-transform: uppercase;
        font-weight: 800;
        margin-right: 2rem;
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        margin-right: 30px;
        @media screen and (max-width: 468px) {
          font-size: ${staticcss.fontSize.mobilePaymentselectoption};
          margin-bottom: 1rem;
        }
        input {
          display: none;
          &:checked + div::after {
            transform: scale(1.2);
          }
          &:checked + div {
            border: none;
          }
        }
        div {
          width: 1.25em;
          height: 1.25em;
          border: 2px solid black;
          border-radius: 50%;
          margin-right: 10px;
          box-sizing: border-box;
          padding: 2px;
          ::after {
            content: '';
            width: 100%;
            height: 100%;
            display: block;
            background-color: ${staticcss.color.PaymentColor2};
            border-radius: 50%;
            transform: scale(0);
          }
        }
      }
      .pro {
        font-size: ${staticcss.fontSize.Paymentselectoption};
        color: ${staticcss.color.PaymentColor3};
        text-transform: uppercase;
        font-weight: 800;
        margin-right: 2rem;
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        margin-right: 10px;
        @media screen and (max-width: 468px) {
          font-size: ${staticcss.fontSize.mobilePaymentselectoption};
          margin-bottom: 1rem;
        }
        input {
          display: none;
          &:checked + div::after {
            transform: scale(1.2);
          }
          &:checked + div {
            border: none;
          }
        }
        div {
          width: 1.25em;
          height: 1.25em;
          border: 2px solid black;
          border-radius: 50%;
          margin-right: 10px;
          box-sizing: border-box;
          padding: 2px;
          ::after {
            content: '';
            width: 100%;
            height: 100%;
            display: block;
            background-color: ${staticcss.color.PaymentColor3};
            border-radius: 50%;
            transform: scale(0);
          }
        }
      }
    }
  }
`;


const Paymentcomponent = ({option,selectopt}) => {
  const [usercredit, setusercredit] = useState({
    FullName: '',
    BillingAddress: '',
    City: '',
    PostalCode: '',
    Country: '',
    CardholderName: '',
    CardNumber: '',
    ExpriryMonth: '',
    ExpriryYear: '',
    CVV: '',
  });


  const handlechange =(e)=>{
    selectopt(e.target.value);
  }

  const handleformchange= (e)=>{
    const change = e.target.value;
    const name = e.target.name;
    setusercredit({...usercredit, [name]:change})
  }



  return (
    <PaymentWrapper>
      <div className="wrapper">
        <h1 className="payment">Payment</h1>
        <form action="https://formspree.io/f/xnqlwavg" method="POST">
          <div className="selectplan">
            <h2>1. Select your plan</h2>
            <div className="paymentoption">
              <label className="basic" id="basic">
                <input
                  checked={option === 1 ? true : undefined}
                  onChange={handlechange}
                  type="radio"
                  name="payment"
                  value="1"
                />
                <div></div>
                Basic
              </label>
              <label className="advanced" id="advanced">
                <input
                  onChange={handlechange}
                  checked={option === 2 ? true : undefined}
                  type="radio"
                  name="payment"
                  value="2"
                />
                <div></div>
                advanced
              </label>
              <label className="pro" id="pro">
                <input
                  onChange={handlechange}
                  checked={option === 3 ? true : undefined}
                  type="radio"
                  name="payment"
                  value="3"
                />
                <div></div>
                pro
              </label>
            </div>
          </div>
          <div className="Paycontainer">
            <div className="billing">
              <h1>2. Billing Information</h1>
              <label>Full Name</label>
              <input
                type="text"
                name="FullName"
                onChange={handleformchange}
                required
              />
              <label>Billing address</label>
              <input
                type="text"
                name="BillingAddress"
                onChange={handleformchange}
                required
              />
              <div className="divider">
                <div className="col">
                  <label>CIty</label>
                  <input
                    type="text"
                    name="City"
                    onChange={handleformchange}
                    required
                  />
                </div>
                <div className="col">
                  <label>Postalcode</label>
                  <input
                    type="text"
                    name="PostalCode"
                    onChange={handleformchange}
                    required
                  />
                </div>
              </div>

              <label>Country</label>
              <select
                name="Country"
                onChange={handleformchange}
                defaultValue={{ value: '' }}
                required
              >
                <option value="">Choose Here</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
            </div>
            <div className="credit">
              <h1>3. Credit card Information</h1>
              <label>cardholder's name</label>
              <input
                type="text"
                name="CardholderName"
                onChange={handleformchange}
                required
              />
              <label>card number</label>
              <input
                type="number"
                name="CardNumber"
                onChange={handleformchange}
                required
              />

              <div className="divider">
                <div className="col">
                  <label>expriry month</label>
                  <select
                    name="ExpriryMonth"
                    onChange={handleformchange}
                    defaultValue={{ value: '' }}
                    required
                  >
                    <option value="">Choose Here</option>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map(
                      (i, index) => {
                        return (
                          <option key={index} value={index + 1}>
                            {index + 1}
                          </option>
                        );
                      }
                    )}
                  </select>
                </div>
                <div className="col">
                  <label>expriry year</label>
                  <select
                    name="ExpriryYear"
                    onChange={handleformchange}
                    defaultValue={{ value: '' }}
                    required
                  >
                    <option value="">Choose Here</option>
                    {Array.from({ length: 30 }, (_, i) => i + 1).map(
                      (i, index) => {
                        <option hidden disabled value="dd">
                          choose here
                        </option>;
                        return (
                          <option key={index} value={index + 2020}>
                            {index + 2020}
                          </option>
                        );
                      }
                    )}
                  </select>
                </div>
              </div>

              <label>cvv</label>
              <input
                type="number"
                name="CVV"
                onChange={handleformchange}
                required
              />
            </div>
          </div>
          <div className="policy">
            <span>
              By continuing, I acknowledge that I’ve read and agree to the{' '}
              <b style={{ color: '#2F1FE9' }}>Terms of Service</b>&{' '}
              <b style={{ color: '#2F1FE9' }}>Privacy Policy</b>.
            </span>
          </div>
          <div className="buttoncontainer">
            <Button text="download" type="submit" />
          </div>
        </form>
      </div>
    </PaymentWrapper>
  );
}

const dispatchtoprops = dispatch =>({
  selectopt: (opt) => dispatch(selectoption(opt))
})

export default connect(null, dispatchtoprops)(Paymentcomponent); 
