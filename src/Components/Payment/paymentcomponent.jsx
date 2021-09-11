import React from 'react'
import styled from 'styled-components'
import staticcss from '../../Staticcss'
import Button from '../util/Button';

const PaymentWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #eee;
  .wrapper {
    max-width: 1300px;
    margin: 0 auto;
    padding: 5rem 10rem 5rem 20rem;
    .policy {
      margin-top: 3rem;
      span {
        font-size: ${staticcss.fontSize.Paymentpolicy};
      }
    }
    .buttoncontainer {
      margin-top: 2rem;
    }
  }
  .payment {
    font-size: ${staticcss.fontSize.PaymentMainhead};
    text-transform: uppercase;
  }
  .Paycontainer {
    display: flex;
    flex-direction: row;
    width: 70%;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;

    .billing {
      display: flex;
      flex-direction: column;
      h1 {
        font-size: ${staticcss.fontSize.Paymentselecthead};
        font-weight: 300;
      }
      .divider {
        display: flex;
        .col {
          display: flex;
          flex-direction: column;
          :last-child {
            margin-left: 8px;
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
      }
      input {
        width: 330px;
        height: 40px;
        border: 2px solid black;
        border-radius: 3px;
        font-size: 24px;
        line-height: 24px;
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
      }
    }
    .credit {
      display: flex;
      flex-direction: column;
      h1 {
        font-size: ${staticcss.fontSize.Paymentselecthead};
        font-weight: 300;
      }
      label {
        text-transform: uppercase;
        font-size: ${staticcss.fontSize.Paymentlabel};
        font-weight: bold;
        letter-spacing: 3px;
        margin-top: 1rem;
        margin-bottom: 5px;
      }
      .divider {
        display: flex;
        .col {
          display: flex;
          flex-direction: column;
          :last-child {
            margin-left: 8px;
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
    }
    .paymentoption {
      display: flex;
      align-items: center;

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


const Paymentcomponent = () => {
  console.log(Array(10))

  return (
    <PaymentWrapper>
      <div className="wrapper">
        <h1 className="payment">Payment</h1>
        <form>
          <div className="selectplan">
            <h2>1. Select your plan</h2>
            <div className="paymentoption">
              <label className="basic" id="basic">
                <input type="radio" name="payment" value="basic" />
                <div></div>
                Basic
              </label>
              <label className="advanced" id="advanced">
                <input type="radio" name="payment" value="advanced" />
                <div></div>
                advanced
              </label>
              <label className="pro" id="pro">
                <input type="radio" name="payment" value="pro" />
                <div></div>
                pro
              </label>
            </div>
          </div>
          <div className="Paycontainer">
            <div className="billing">
              <h1>2. Billing Information</h1>
              <label>Full Name</label>
              <input type="text" />
              <label>Billing address</label>
              <input type="text" />
              <div className="divider">
                <div className="col">
                  <label>CIty</label>
                  <input type="text" />
                </div>
                <div className="col">
                  <label>Postalcode</label>
                  <input type="text" />
                </div>
              </div>

              <label>Country</label>
              <select>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
            </div>
            <div className="credit">
              <h1>3. Credit card Information</h1>
              <label>cardholder's name</label>
              <input type="text" />
              <label>card number</label>
              <input type="number" />

              <div className="divider">
                <div className="col">
                  <label>expriry month</label>
                  <select>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map(
                      (i, index) => {
                        console.log(index);
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
                  <select>
                    {Array.from({ length: 30 }, (_, i) => i + 1).map(
                      (i, index) => {
                        console.log(index);
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
              <input type="number" />
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
            <Button text="download" />
          </div>
        </form>
      </div>
    </PaymentWrapper>
  );
}

export default Paymentcomponent
