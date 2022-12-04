import React from 'react';

const HelpInfo = ({setState}) => {
    return (
        <article id="form-wrapper">
            <article id="form-wrapper-container">
                <article id="wrapper-x" onClick={() => setState(0)}>
                    X
                </article>
                <article id="info-article">
                    <h2>Welcome to doggies</h2>
                    <h4>¡Hey! ¿How are you doing? my name is Juan Segundo Martínez, thanks for visting my personal project for Henry, i am here to explain you how the filters works.</h4>
                    <h3>Temperaments</h3>
                    <h4>Temperaments has the next logic, they let you filter all the doggies with the temperament that you select, if you already had filtered the doggies and you select a new temperament, it will filter the selected doggies with the new temperament. For example if i selected Stubborn and next Curious, i will get the Corious doggies from Stubborn.</h4>
                    <h3>Order</h3>
                    <h4>It will let you filter all doggies from A to Z or reverse! Also if you already had selected a temperament, it will return the alphabetical order from the selected temperament.</h4>
                    <h3>Weight</h3>
                    <h4>It will let you filter all doggies with the Max or Min weight! Also if you already had selected a temperament, it will return the Max and Min weight from the selected temperament.</h4>
                </article>
            </article>
        </article>
    );
}

export default HelpInfo;
