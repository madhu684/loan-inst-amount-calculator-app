import React, { Fragment, useState } from "react";
import './LoanInstAmountCalculator.css';
import axios from "axios";

function LoanInstAmountCalculator(){
    const [calculationType, setCalculationType] = useState("");
    const [principle, setPrinciple] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [noOfPayment, setNoOfPayment] = useState("");

    const handleCalculationTypeChange = (value) => {
        setCalculationType(value);
    }
    const handlePrincipleChange = (value) => {
        setPrinciple(value);
    }
    const handleInterestRateChange = (value) => {
        setInterestRate(value);
    }
    const handleNoOfPaymentChange = (value) => {
        setNoOfPayment(value);
    }

    const handleCalculate = () => {
        const data = {
            CalculationType: calculationType,
            Principle: principle,
            InterestRate: interestRate,
            NoOfPayment: noOfPayment
        };
        const url = 'https://localhost:7088/api/LoanCalculation';
        axios.post(url, data).then((result) => {
            alert(data);
        }).catch((error) => {
            alert(error);
        })
    };

    

    return (
        <Fragment>
            
            <div className="container">
                <div className="row"><h2>Loan Calculator</h2></div>
                <div className="row">
                    <div className="col-md-4 form-label">Calculation Type: </div>
                    <div className="col-md-8">
                        <select id="optCalculationType" className="form-control" 
                        onChange={(e) => handleCalculationTypeChange(e.target.value)}>
                            <option value="1">Equal monthly installment</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 form-label">Loan Amount(Principle): </div>
                    <div className="col-md-6">
                        <input type="text" id="txtPrinciple" className="form-control" 
                        onChange={(e) => handlePrincipleChange(e.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 form-label">Interest Rate: </div>
                    <div className="col-md-6">
                        <input type="text" id="txtInterestRate" className="form-control" 
                        onChange={(e) => handleInterestRateChange(e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 form-label">No Of Payments </div>
                    <div className="col-md-6">
                        <input type="text" id="txtNoOfPayment" className="form-control" 
                        onChange={(e) => handleNoOfPaymentChange(e.target.value)}/>
                    </div>
                </div>
                <div className="row" id="submit-area">
                    <div className="col-md-7 form-label">
                        <button className="form-control btn btn-primary" 
                        onClick={() => handleCalculate()}>Calculate</button>
                    </div>
                    <div className="col-md-5">
                        <button className="form-control btn btn-danger">Clear</button>
                    </div>
                </div>
                <hr className="hr-line" />
                <div className="row">
                    <div className="col-md-4 form-label">Month Payment = $ </div>
                    <div className="col-md-6">
                        <input type="text" id="txtMonthPayment" className="form-control" disabled="true" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default LoanInstAmountCalculator;