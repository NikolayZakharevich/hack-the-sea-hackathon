import React from 'react';
import "./FloorLayout.scss"
import {LAYOUT_CABINET} from "../../App";
import {getCabinet} from "../../api/cabinet";
import {isNumeric} from "../../tools/helpers";

const FloorLayout = ({id, cabinets, setActiveLayout, setActiveFloor, setActiveCabinet}) => {

    const onClickCabinet = id => {
        getCabinet(id).then(r => {
                if (r && r.cabinet) {
                    setActiveCabinet({id, tables: r.cabinet.tables});
                    setActiveLayout(LAYOUT_CABINET)
                }
            }
        )
    };

    if (id === 1) {
        return (
            <svg viewBox="210 180 450 950">
                <style>
                    {
                        ".prefix__st1,.prefix__st2{fill:none;stroke-miterlimit:10}.prefix__st1{stroke:#000;stroke-width:.12;stroke-linecap:round;stroke-linejoin:round}.prefix__st2{stroke:#939393;stroke-width:.5}.prefix__st3{fill:#939393}.prefix__st4{fill:none;stroke:#939393;stroke-width:.75;stroke-miterlimit:10}.prefix__st5{font-family:&apos;Roboto-Black&apos;}.prefix__st6{font-size:13.0625px}.prefix__st11,.prefix__st7{fill:none;stroke:#000;stroke-width:1.5;stroke-miterlimit:10}.prefix__st11{fill:#939393;stroke:#939393;stroke-width:.5}"
                    }
                </style>
                <path
                    d="M533.1 1042.7l-.1 64.8-71.3-.1 1-16.5-34.6 1 .5 26.7H297.3l-1.1-76.2v-59.7l33.1-.2s32.4-3 33.1-36.8c.4-16.8.4-30.3.4-30.3l23.6-2s-1.1-23.6 14.5-43.6c14.2-18.2 36.2-21 36.2-21l.1-350.9-3.9-1.2-.3-11.7-5.8-.9v-33.9l5.8.3.4-11.8 3.3-1.9.5-122-.2-31.2-35.5-1.3 1.3-24.9 34.5-2.3.1-20.7-4.6-1.4.1-27.7 42.7-.7-.2 36.2 90.2-.8-.4 59.3 1.5 67.3-94.5 1.5v480.5l43.9-.4.3 82.3s-3.6 32.8-41.6 45.8c-3.1 1.1-.6 65-.6 65l58.9 1.4z"
                    fill="#e3e4e5"
                    id="prefix__Layer_3"
                />
                <g id="prefix__Layer_1">
                    <path
                        className="prefix__st1"
                        d="M298.2 1110.2v5.5M433.3 205.8h3.1M436.4 207h126.3M298.2 1110.2v5.5M299.7 232.2h134.5M225 383.8v3.8M437.3 652.8h1.5M436.4 205.8v1.2M436.4 207.7h51.4M562.1 207.5l.6.8M562.1 209l.6.8M562.1 208.7l.6-.8M562.1 210.2l.6-.8M561.6 207l.5.5M559.9 207l.7.7M558.4 207l.8.7M556.7 207l.9.7M555.4 207l.5.7M553.7 207l.8.7M552.3 207l.8.7M550.6 207l.9.7M549.2 207l.6.7M547.6 207l.8.7M546.1 207l.6.7M544.4 207l1 .7M543 207l.7.7M541.4 207l.8.7M540 207l.5.7M538.3 207l.8.7M536.9 207l.6.7M535.3 207l.8.7M533.9 207l.5.7M532.2 207l.8.7M530.7 207l.7.7M529 207l.9.7M527.7 207l.6.7M526 207l.8.7M524.6 207l.6.7M522.9 207l.9.7M521.5 207l.6.7M519.9 207l.8.7M518.2 207l.8.7M516.8 207l.9.7M515.3 207l.7.7M513.8 207l.7.7M512.1 207l.7.7M510.6 207l.8.7M508.9 207l.9.7M507.6 207l.8.7M505.9 207l.8.7M504.5 207l.8.7M502.8 207l.9.7M501.3 207l1 .7M499.8 207l.8.7M498.3 207l.8.7M496.6 207l1 .7M495.2 207l.9.7M493.6 207l.8.7M492.2 207l.8.7M490.5 207l.8.7M489.1 207l.6.7M487.5 207l.8.7M486.1 207l.7.7M484.4 207l.7.7M482.9 207l.7.7M481.2 207l.9.7M479.8 207l.9.7M478.2 207l.8.7M476.8 207l.6.7M475.1 207l.9.7M473.7 207l.6.7M472.1 207l.8.7M470.6 207l.6.7M468.9 207l.8.7M467.5 207l.7.7M465.9 207l.8.7M464.5 207l.5.7M462.8 207l.8.7M461.4 207l.6.7M459.7 207l.9.7M458.4 207l.5.7M456.7 207l.8.7M455.2 207l.7.7M453.5 207l.9.7M452 207l.8.7M450.5 207l.8.7M449.1 207l.5.7M447.4 207l.9.7M445.8 207l.8.7M444.4 207l.8.7M443 207l.5.7M441.3 207l.7.7M439.7 207l.8.7M438.3 207l.7.7M436.8 207l.5.7M436.6 207.7l.7-.7M438.1 207.7l.7-.7M439.6 207.7l.7-.7M441 207.7l1-.7M442.7 207.7l.8-.7M444.3 207.7l.6-.7M445.8 207.7l.7-.7M447.4 207.7l.8-.7M448.8 207.7l.8-.7M450.4 207.7l.7-.7M452 207.7l.6-.7M453.5 207.7l.8-.7M455 207.7l.8-.7M456.5 207.7l1-.7M458.1 207.7l.7-.7M459.7 207.7l.8-.7M461.1 207.7l.9-.7M462.7 207.7l.9-.7M464.2 207.7l.8-.7M465.8 207.7l.7-.7M467.5 207.7l.7-.7M468.8 207.7l.9-.7M470.4 207.7l.8-.7M472 207.7l.6-.7M473.7 207.7l.6-.7M475.1 207.7l.8-.7M476.5 207.7l.9-.7M478.1 207.7l.6-.7M479.8 207.7l.6-.7M481.2 207.7l.8-.7M482.7 207.7l.9-.7M484.2 207.7l.9-.7M485.9 207.7l.7-.7M487.4 207.7l.7-.7M488.8 207.7l.9-.7M490.4 207.7l.9-.7M492.1 207.7l.6-.7M493.5 207.7l.8-.7M495.2 207.7l.7-.7M496.5 207.7l.9-.7M498.2 207.7l.7-.7M499.6 207.7l.8-.7M501.3 207.7l.7-.7M502.8 207.7l.8-.7M504.3 207.7l1-.7M505.8 207.7l.8-.7M507.5 207.7l.6-.7M508.9 207.7l.8-.7M510.5 207.7l.9-.7M512.1 207.7l.7-.7M513.6 207.7l.7-.7M515.3 207.7l.5-.7M516.5 207.7l1-.7M518.2 207.7l.8-.7M519.8 207.7l.6-.7M521.5 207.7l.5-.7M522.9 207.7l.8-.7M524.3 207.7l.8-.7M525.9 207.7l.7-.7M527.5 207.7l.6-.7M529 207.7l.8-.7M530.5 207.7l.8-.7M532 207.7l1-.7M533.6 207.7l.8-.7M535.2 207.7l.8-.7M536.6 207.7l.8-.7M538.2 207.7l.9-.7M539.7 207.7l.8-.7M541.3 207.7l.8-.7M543 207.7l.5-.7M544.4 207.7l.8-.7M545.9 207.7l.8-.7M547.5 207.7l.7-.7M549.2 207.7l.5-.7M550.6 207.7l.8-.7M552 207.7l.8-.7M553.6 207.7l.9-.7M555.3 207.7l.5-.7M556.7 207.7l.8-.7M558.2 207.7l.7-.7M559.7 207.7l.9-.7M561.4 207.7l.7-.7M299.7 982v-.2M299.7 369.9v.1M432.9 1117.3l3.7 3.8M432.9 1118.1l3 3M432.9 1119l2.2 2.1M432.9 1119.6l1.4 1.5M432.9 1120.4l.5.7M299.7 500.7h.1M299.7 631.4h.2M299.7 783.9h.2M387.8 914.9h-77.7M386.4 913.3h-76.3M299.7 913.3h2.8M299.7 914.9h2.8M300.6 913.3l1.3 1.6M299.7 914.6v.3M302.3 913.3l.2.3M299.9 913.3l1.5 1.6M363.3 914.9l.9.9M386.4 913.3l.9.9M385.6 913.3l1.7 1.6M384.8 913.3l1.7 1.6M384.2 913.3l1.4 1.6M383.3 913.3l1.8 1.6M382.6 913.3l1.6 1.6M381.7 913.3l1.7 1.6M381 913.3l1.6 1.6M380.3 913.3l1.7 1.6M379.5 913.3l1.7 1.6M378.7 913.3l1.7 1.6M378 913.3l1.5 1.6M377.1 913.3l1.6 1.6M376.5 913.3l1.5 1.6M375.6 913.3l1.6 1.6M374.9 913.3l1.6 1.6M374.1 913.3l1.5 1.6M373.3 913.3l1.7 1.6M372.5 913.3l1.6 1.6M371.6 913.3l1.7 1.6M371 913.3l1.5 1.6M370.3 913.3l1.6 1.6M369.4 913.3l1.7 1.6M368.8 913.3l1.5 1.6M368 913.3l1.4 1.6M367.1 913.3l1.8 1.6M366.4 913.3l1.6 1.6M365.5 913.3l1.7 1.6M364.8 913.3l1.6 1.6M364.1 913.3l1.7 1.6M363.3 913.3l1.7 1.6M362.6 913.3l1.5 1.6M361.6 913.3l1.7 1.6M360.9 913.3l1.7 1.6M360.4 913.3l1.4 1.6M359.4 913.3l1.7 1.6M358.7 913.3l1.7 1.6M357.9 913.3l1.7 1.6M357.1 913.3l1.7 1.6M356.5 913.3l1.4 1.6M355.4 913.3l1.7 1.6M354.8 913.3l1.7 1.6M354 913.3l1.7 1.6M353.2 913.3l1.7 1.6M352.6 913.3l1.4 1.6M351.6 913.3l1.9 1.6M351 913.3l1.6 1.6M350.3 913.3l1.5 1.6M349.4 913.3l1.6 1.6M348.6 913.3l1.7 1.6M347.9 913.3l1.7 1.6M347.1 913.3l1.7 1.6M346.4 913.3l1.5 1.6M345.5 913.3l1.8 1.6M344.9 913.3l1.5 1.6M343.9 913.3l1.7 1.6M343.3 913.3l1.6 1.6M342.5 913.3l1.7 1.6M341.7 913.3l1.7 1.6M340.9 913.3l1.6 1.6M340.3 913.3l1.4 1.6M339.4 913.3l1.8 1.6M338.7 913.3l1.6 1.6M337.8 913.3l1.7 1.6M337.1 913.3l1.6 1.6M336.4 913.3l1.7 1.6M335.6 913.3l1.7 1.6M334.8 913.3l1.6 1.6M333.9 913.3l1.7 1.6M333.2 913.3l1.6 1.6M332.4 913.3l1.7 1.6M331.7 913.3l1.7 1.6M331 913.3l1.4 1.6M330.2 913.3l1.7 1.6M329.4 913.3l1.7 1.6M328.7 913.3l1.5 1.6M327.7 913.3l1.7 1.6M327.1 913.3l1.6 1.6M326.3 913.3l1.7 1.6M325.5 913.3l1.7 1.6M324.9 913.3l1.4 1.6M323.8 913.3l2 1.6M323.3 913.3l1.6 1.6M322.4 913.3l1.7 1.6M321.6 913.3l1.7 1.6M320.9 913.3l1.6 1.6M320.2 913.3l1.7 1.6M319.4 913.3l1.7 1.6M318.7 913.3l1.5 1.6M317.7 913.3l1.9 1.6M317.2 913.3l1.5 1.6M316.2 913.3l1.7 1.6M315.5 913.3l1.7 1.6M314.8 913.3l1.4 1.6M314 913.3l1.7 1.6M313.2 913.3l1.6 1.6M312.3 913.3l1.7 1.6M311.5 913.3l1.7 1.6M311 913.3l1.6 1.6M310.1 913.3l1.7 1.6M310.1 914l.9.9M310.1 914.9h.1M437.3 846.2h.2M386.5 912.7l1.6 1.4M386.4 913.3l1.4 1.6M434.7 437.1V451M433 497.7v-12.3M434.7 497.7v-14M433 449.5h-5.3M433 485.4h-5.3M429.4 483.7h5.3v14M489.5 207.7h72.6M299.5 979.9h.2M427.7 456.5v-7M434.3 483.7l.4.2M433.5 483.7l1.2 1.2M432.9 483.7l1.8 1.7M432.1 483.7l2.6 2.6M433 485.4l1.7 1.7M431.3 483.7l1.6 1.7M433 486.2l1.7 1.7M430.7 483.7l1.7 1.7M433 487l1.7 1.5M429.9 483.7l1.7 1.7M433 487.6l1.7 1.7M433 488.5l1.7 1.6M427.7 483.9l1.4 1.5M433 489.2l1.7 1.8M427.7 484.5l.8.9M433 490.1l1.7 1.4M433 490.7l1.7 1.7M433 491.5l1.7 1.7M433 492.3l1.7 1.7M433 493.1l1.7 1.6M433 494l1.7 1.4M433 494.7l1.7 1.7M433 495.4l1.7 1.7M433 496.2l1.6 1.5M433 496.9l.8.8M434.2 437.1l.5.7M433.4 437.1l1.3 1.4M433 437.6l1.7 1.7M433 449.2l1.7 1.6M432.5 449.5l1.7 1.5M432 449.5l1.4 1.5M437.3 431.8l.4.4M438.6 502.5l.2.3M437.9 502.5l.9.9M437.3 502.5l1.5 1.7M437.3 503.4l1.5 1.6M437.3 504.2l1.5 1.7M437.3 505l1.5 1.5M437.3 505.6l1.5 1.7M437.3 506.4l1.5 1.7M437.3 507.3l1.5 1.6M437.3 508.1l1.5 1.7M437.3 508.9l1.5 1.4M437.3 509.6l1.5 1.5M437.3 510.3l1.5 1.7M437.3 511.1l1.5 1.6M437.3 511.8l1.5 1.7M437.3 512.6l1.5 1.7M437.3 513.5l1.5 1.5M437.3 514.3l1.5 1.7M437.3 515l1.5 1.6M437.3 515.7l1.5 1.7M437.3 516.5l1.5 1.7M437.3 517.4l1.5 1.4M437.3 517.9l1.5 2M437.3 518.8l1.5 1.6M437.3 519.6l1.5 1.6M437.3 652.1l.8.7"
                    />
                    <path
                        className="prefix__st3"
                        d="M490.9 883h10.2v4.6h-10.2zM473.3 882.9h10.1v4.7h-10.1z"
                    />
                    <path
                        transform="rotate(90 475.617 868.382)"
                        className="prefix__st3"
                        d="M456.5 866h38.3v4.7h-38.3z"
                    />
                    <path className="prefix__st3" d="M473.4 849.3h43.3v4.7h-43.3z"/>
                    <path
                        transform="rotate(90 514.408 868.921)"
                        className="prefix__st3"
                        d="M495.8 866.6H533v4.6h-37.2z"
                    />
                    <path className="prefix__st3" d="M508.3 883h7.2v4.6h-7.2z"/>
                    <path
                        transform="rotate(-90 298.186 607.127)"
                        className="prefix__st3"
                        d="M-78 605.1h752.4v4H-78z"
                    />
                    <path
                        className="prefix__st3"
                        d="M295.8 231h145.4v4.1H295.8zM432.9 204.3h133.3v4.1H432.9zM435.2 503.2h-40.8v.5h3.3v11.1h-3.4v.5h29.1v4.6h11.8v-16.7zm-34.3 11.6h-2.7v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm3.2 0H411v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm3.3 0h-2.7v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm.5-11.1h10.7v11.1h-10.7v-11.1zm0 11.6h10.7v1.7h-10.7v-1.7zm0 2.3h10.7v1.7h-10.7v-1.7zM297.7 497.2h141.1v4H297.7z"
                    />
                    <path
                        transform="rotate(90 437.859 509.692)"
                        className="prefix__st3"
                        d="M425.4 508.6h24.9v2.1h-24.9z"
                    />
                    <path
                        transform="rotate(90 437.833 566.476)"
                        className="prefix__st3"
                        d="M407.6 565.5h60.5v2h-60.5z"
                    />
                    <path
                        className="prefix__st3"
                        d="M434.9 609.7h-11.5v4.7h-29.3v12.2h41v-16.9h-.2zm-.3.5v1.7h-10.7v-1.7h10.7zm-10.7 2.3h10.7v1.9h-10.7v-1.9zm-22.5 2.5h2.7v11h-2.7v-11zm-.6 11h-2.7v-11h2.7v11zm3.8-11h2.7v11h-2.7v-11zm3.2 0h2.7v11h-2.7v-11zm3.2 0h2.7v11H411v-11zm3.2 0h2.7v11h-2.7v-11zm3.2 0h2.7v11h-2.7v-11zm-19.8 0v11h-3v-11h3zm23.1 11v-11h2.7v11h-2.7zm3.2 0v-11h10.7v11h-10.7zM297.3 629.3h141.1v4H297.3z"
                    />
                    <path
                        transform="rotate(90 437.736 630.993)"
                        className="prefix__st3"
                        d="M415 630h45.5v2.1H415z"
                    />
                    <path
                        transform="rotate(90 437.99 707.653)"
                        className="prefix__st3"
                        d="M398.9 706.6h78.2v2.1h-78.2z"
                    />
                    <path className="prefix__st2" d="M302.1 626.4h92.2v-123h-92.2v123"/>
                    <path
                        className="prefix__st3"
                        d="M297.4 776.9h141.1v4H297.4zM296.5 912.2h92v4h-92z"
                    />
                    <path
                        transform="rotate(90 433.81 491.413)"
                        className="prefix__st3"
                        d="M426 490.4h15.6v2.1H426z"
                    />
                    <path
                        transform="rotate(90 428.323 478.144)"
                        className="prefix__st3"
                        d="M420.7 477.1h15.1v2.1h-15.1z"
                    />
                    <path
                        transform="rotate(90 428.222 452.99)"
                        className="prefix__st3"
                        d="M424.2 451.9h8v2.1h-8z"
                    />
                    <path
                        transform="rotate(-180 431.147 450.036)"
                        className="prefix__st3"
                        d="M427.2 449h8v2.1h-8z"
                    />
                    <path
                        transform="rotate(-90 434.07 443.961)"
                        className="prefix__st3"
                        d="M426.9 442.9h14.3v2.1h-14.3z"
                    />
                    <path
                        transform="rotate(-180 435.92 437.07)"
                        className="prefix__st3"
                        d="M433 436h5.9v2.1H433z"
                    />
                    <path
                        transform="rotate(-90 437.977 423.04)"
                        className="prefix__st3"
                        d="M422.9 422h30.2v2.1h-30.2z"
                    />
                    <path
                        transform="rotate(-90 438.199 369.807)"
                        className="prefix__st3"
                        d="M413.4 368.7H463v2.1h-49.6z"
                    />
                    <path
                        className="prefix__st3"
                        d="M296.2 365.2h141.4v4H296.2zM434.8 371.3H394v.5h3.3v11.1h-3.4v.5H423v4.6h11.8v-16.7zm-34.3 11.6h-2.7v-11.1h2.7v11.1zm3.2 0H401v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm3.3 0h-2.7v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm.5-11.1h10.7v11.1h-10.7v-11.1zm0 11.6h10.7v1.7h-10.7v-1.7zm0 2.3h10.7v1.7h-10.7v-1.7zM400.3 495h16.9v-41H405v29.3h-4.7V495zm.5-11.3h1.7v10.7h-1.7v-10.7zm4.2 0v10.7h-1.9v-10.7h1.9zm11.7-22.5v2.7h-11.1v-2.7h11.1zm-11.1-.6V458h11.1v2.7h-11.1zm11.1 3.8v2.7h-11.1v-2.7h11.1zm0 3.2v2.7h-11.1v-2.7h11.1zm0 3.2v2.7h-11.1v-2.7h11.1zm0 3.2v2.7h-11.1V474h11.1zm0 3.3v2.7h-11.1v-2.7h11.1zm-11.1-22.9h11.1v3h-11.1v-3zm11.1 28.8h-11.1v-2.7h11.1v2.7zm0 11.2h-11.1v-10.7h11.1v10.7z"
                    />
                    <path className="prefix__st2" d="M301.7 494.5h92.2V371.6h-92.2v122.9"/>
                    <path
                        transform="rotate(-180 431.066 484.666)"
                        className="prefix__st3"
                        d="M427.3 483.6h7.6v2.1h-7.6z"
                    />
                    <path
                        transform="rotate(-90 438.003 306.477)"
                        className="prefix__st3"
                        d="M413.9 305.6h48.3v1.8h-48.3z"
                    />
                    <path
                        className="prefix__st3"
                        d="M434.5 346.3H423v4.7h-29.3v12.2h41v-16.9h-.2zm-.3.5v1.7h-10.7v-1.7h10.7zm-10.7 2.3h10.7v1.9h-10.7v-1.9zm-22.5 2.5h2.7v11.1H401v-11.1zm-.6 11h-2.7v-11.1h2.7v11.1zm3.8-11h2.7v11.1h-2.7v-11.1zm3.2 0h2.7v11.1h-2.7v-11.1zm3.2 0h2.7v11.1h-2.7v-11.1zm3.2 0h2.7v11.1h-2.7v-11.1zm3.2 0h2.7v11.1H417v-11.1zm-19.8 0v11.1h-3v-11.1h3zm23.1 11v-11.1h2.7v11.1h-2.7zm3.2 0v-11.1h10.7v11.1h-10.7z"
                    />
                    <path className="prefix__st2" d="M301.7 363h92.2V237.3h-92.2V363"/>
                    <path
                        transform="rotate(-90 436.574 278.986)"
                        className="prefix__st3"
                        d="M431.9 276.6h9.3v4.7h-9.3z"
                    />
                    <path className="prefix__st3" d="M400.4 278.9h38.5v4.7h-38.5z"/>
                    <path
                        transform="rotate(-90 402.808 269.153)"
                        className="prefix__st3"
                        d="M388.3 266.8h28.9v4.7h-28.9z"
                    />
                    <path className="prefix__st3" d="M401.5 254.7h37.6v4.6h-37.6z"/>
                    <path
                        transform="rotate(-90 436.831 259.22)"
                        className="prefix__st3"
                        d="M432.3 256.9h9.1v4.6h-9.1z"
                    />
                    <path
                        transform="rotate(-90 565.48 690.35)"
                        className="prefix__st3"
                        d="M134.9 688.4H996v4H134.9z"
                    />
                    <path
                        transform="rotate(-90 297.8 1081.492)"
                        className="prefix__st3"
                        d="M258.2 1079.5h79.3v4h-79.3z"
                    />
                    <path
                        className="prefix__st3"
                        d="M295.8 1117.3h140.7v4H295.8zM451.6 1116.9h115.9v4H451.6z"
                    />
                    <path
                        transform="rotate(90 439.34 236.15)"
                        className="prefix__st3"
                        d="M434.2 234.1h10.3v4.1h-10.3z"
                    />
                    <path
                        className="prefix__st3"
                        d="M434.8 635.3H394v.5h3.3v11.1h-3.4v.5H423v4.6h11.8v-16.7zm-34.3 11.6h-2.7v-11.1h2.7v11.1zm3.2 0H401v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm3.3 0h-2.7v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm.5-11.1h10.7v11.1h-10.7v-11.1zm0 11.6h10.7v1.7h-10.7v-1.7zm0 2.3h10.7v1.7h-10.7v-1.7z"
                    />
                    <path className="prefix__st2" d="M301.7 774.5h92.2V635.6h-92.2v138.9"/>
                    <path className="prefix__st3" d="M296.4 845.6H439v4H296.4z"/>
                    <path className="prefix__st2" d="M529.8 300.5h35.7v-59.6h-35.7v59.6"/>
                    <path
                        className="prefix__st3"
                        d="M498.5 257.8v27h31.6v-27h-31.6zm7.2.5h2.9v26h-2.9v-26zm-.5 25.9h-2.9v-26h2.9v26zm4-25.9h2.9v26h-2.9v-26zm3.4 0h2.9v26h-2.9v-26zm3.5 0h2.9v26h-2.9v-26zm3.5 0h2.9v26h-2.9v-26zm3.4 0h2.9v26H523v-26zm-24 0h2.7v26H499v-26zm30.5 25.9h-3.1v-26h3.1v26z"
                    />
                    <path className="prefix__st2" d="M337.2 1043h-39.4v75.5h39.4V1043"/>
                    <path
                        className="prefix__st3"
                        d="M368.6 1093.1v-27H337v27h31.6zm-7.3-.6h-2.9v-26h2.9v26zm.5-25.9h2.9v26h-2.9v-26zm-4 25.9h-2.9v-26h2.9v26zm-3.4 0h-2.9v-26h2.9v26zm-3.5 0H348v-26h2.9v26zm-3.4 0h-2.9v-26h2.9v26zm-3.5 0h-2.9v-26h2.9v26zm24 0h-2.7v-26h2.7v26zm-30.5-25.9h3.1v26h-3.1v-26z"
                    />
                    <path className="prefix__st4" d="M407.4 262h25v14.9h-25z"/>
                    <circle className="prefix__st7" cx={517.5} cy={1084.3} r={2.2}/>
                    <path d="M518.2 1057.2h-1.5l-4 7.7h9.6l-4.1-7.7zm-.7 1.4l2.7 5.2h-5.4l2.7-5.2z"/>
                    <circle className="prefix__st7" cx={517.5} cy={1055.2} r={2.2}/>
                    <path d="M516.8 1095.6h1.4l4-8.8h-9.4l4 8.8zm.7-1.5l-2.7-5.9h5.3l-2.6 5.9z"/>
                    <circle className="prefix__st7" cx={530} cy={346.8} r={2.2}/>
                    <path d="M530.9 316.5h-1.5l-4 7.7h9.6l-4.1-7.7zm-.7 1.4l2.7 5.2h-5.4l2.7-5.2z"/>
                    <circle className="prefix__st7" cx={530.3} cy={314.5} r={2.2}/>
                    <path d="M529.2 358.2h1.4l4-8.8h-9.4l4 8.8zm.7-1.5l-2.7-5.9h5.3l-2.6 5.9z"/>
                    <path
                        className="prefix__st3"
                        d="M490.8 698.8h-16.9v37.7H486v-26.9h4.7v-10.8zm-.6 10.3h-1.7v-9.8h1.7v9.8zm-4.2 0v-9.8h1.9v9.8H486zm-11.6 20.7v-2.5h11.1v2.5h-11.1zm11.1.5v2.5h-11.1v-2.5h11.1zm-11.1-3.5v-2.4h11.1v2.4h-11.1zm0-2.9v-2.5h11.1v2.5h-11.1zm0-2.9v-2.5h11.1v2.5h-11.1zm0-3v-2.5h11.1v2.5h-11.1zm0-2.9v-2.5h11.1v2.5h-11.1zm11.1 20.9h-11.1v-2.8h11.1v2.8zm-11.1-26.4h11.1v2.5h-11.1v-2.5zm0-10.3h11.1v9.8h-11.1v-9.8zM491.1 845.9V835h-4.7v-27.8h-12.2v39h16.9v-.3zm-.5-.3h-1.7v-10.2h1.7v10.2zm-2.3-10.1v10.2h-1.9v-10.2h1.9zm-2.4-21.4v2.5h-11.1v-2.5h11.1zm-11.1-.5V811h11.1v2.5h-11.1zm11.1 3.5v2.5h-11.1v-2.5h11.1zm0 3.1v2.5h-11.1v-2.5h11.1zm0 3v2.5h-11.1v-2.5h11.1zm0 3.1v2.5h-11.1v-2.5h11.1zm0 3v2.6h-11.1v-2.6h11.1zm0-18.8h-11.1v-2.9h11.1v2.9zm-11.1 21.9h11.1v2.5h-11.1v-2.5zm0 3.1h11.1v10.2h-11.1v-10.2z"
                    />
                    <path className="prefix__st2" d="M498.2 845.6h62.9V698.8h-62.9v146.8"/>
                </g>
                <g id="prefix__Layer_2">
                    <path
                        transform="rotate(-90 470.736 308.17)"
                        className="prefix__st3"
                        d="M464.8 307.2h11.9v1.8h-11.9z"
                    />
                    <path
                        transform="rotate(-90 470.88 375.403)"
                        className="prefix__st3"
                        d="M453.4 374.5h35v1.8h-35z"
                    />
                    <path
                        transform="rotate(-90 470.867 431.626)"
                        className="prefix__st3"
                        d="M443 430.7h55.8v1.8H443z"
                    />
                    <path
                        transform="rotate(-41.565 472.613 356.918)"
                        className="prefix__st3"
                        d="M469.8 356h5.6v1.8h-5.6z"
                    />
                    <path
                        transform="rotate(-41.565 483.57 348.356)"
                        className="prefix__st3"
                        d="M481.1 347.4h4.9v1.8h-4.9z"
                    />
                    <path
                        transform="rotate(38.739 472.561 315.18)"
                        className="prefix__st3"
                        d="M469.8 314.2h5.6v1.8h-5.6z"
                    />
                    <path
                        transform="rotate(-180 515.997 336.41)"
                        className="prefix__st3"
                        d="M484.4 335.5h63.2v1.8h-63.2z"
                    />
                    <path
                        transform="rotate(-90 515.997 336.072)"
                        className="prefix__st3"
                        d="M494.8 335.1h42.3v1.8h-42.3z"
                    />
                    <path className="prefix__st3" d="M470 366.1h97.5v4H470z"/>
                    <path
                        transform="rotate(-90 470.972 587.798)"
                        className="prefix__st3"
                        d="M420.4 586.9h101.1v1.8H420.4z"
                    />
                    <path
                        transform="rotate(-90 470.768 693.05)"
                        className="prefix__st3"
                        d="M427 692.1h87.6v1.8H427z"
                    />
                    <path
                        transform="rotate(-90 470.768 771.398)"
                        className="prefix__st3"
                        d="M446.9 770.5h47.8v1.8h-47.8z"
                    />
                    <path
                        transform="rotate(-90 471.038 828.339)"
                        className="prefix__st3"
                        d="M450.2 827.4h41.7v1.8h-41.7z"
                    />
                    <path
                        transform="rotate(-180 513.064 848.522)"
                        className="prefix__st3"
                        d="M462.1 847.6h102v1.8h-102z"
                    />
                    <path
                        className="prefix__st3"
                        d="M516.7 927.2c-1.2 20.3-15.7 39.9-35.6 47.5-2.3.9-4.6 1.6-6.9 2.1l-.5-1.9c2.2-.5 4.4-1.2 6.6-2 19.1-7.3 32.6-24.6 34.5-45.7h1.9z"
                    />
                    <path
                        transform="rotate(-90 475.16 855.02)"
                        className="prefix__st3"
                        d="M468 854.1h14.4v1.8H468z"
                    />
                    <path
                        transform="rotate(-90 515.776 905.835)"
                        className="prefix__st3"
                        d="M493.2 904.9h45.1v1.8h-45.1z"
                    />
                    <path
                        className="prefix__st3"
                        d="M438 849.4c-17.1 4.1-28.5 12.3-36 21.9l-1.7-1c7.8-10.2 19.7-18.9 37.4-22.9l.3 2zM388.8 916.2h-2.1c-.4-8.8.9-21 6-32.8l1.7.9c-5.1 11.9-6 23.9-5.6 31.9z"
                    />
                    <path
                        transform="rotate(-90 437.99 833.24)"
                        className="prefix__st3"
                        d="M421.8 832.3h32.4v1.8h-32.4z"
                    />
                    <path
                        transform="rotate(-180 442.627 848.675)"
                        className="prefix__st3"
                        d="M437.4 847.8h10.4v1.8h-10.4z"
                    />
                    <path
                        transform="rotate(-90 472.932 1001.47)"
                        className="prefix__st3"
                        d="M446.4 1000.5h53.1v1.8h-53.1z"
                    />
                    <path
                        transform="rotate(-90 472.67 1042.41)"
                        className="prefix__st3"
                        d="M468.8 1041.5h7.8v1.8h-7.8z"
                    />
                    <path
                        transform="rotate(-90 427.409 1080.16)"
                        className="prefix__st3"
                        d="M390.1 1079.2h74.6v1.8h-74.6z"
                    />
                    <path
                        transform="rotate(-180 348.19 1042.696)"
                        className="prefix__st3"
                        d="M296.4 1041.8H400v1.8H296.4z"
                    />
                    <path
                        transform="rotate(-180 421.306 1042.696)"
                        className="prefix__st3"
                        d="M414.3 1041.8h14.1v1.8h-14.1z"
                    />
                    <path
                        transform="rotate(-180 519.253 1042.762)"
                        className="prefix__st3"
                        d="M471.7 1041.8h95.1v1.8h-95.1z"
                    />
                    <path
                        transform="rotate(-90 533.076 1081.372)"
                        className="prefix__st3"
                        d="M494.5 1080.4h77.2v1.8h-77.2z"
                    />
                    <path
                        transform="rotate(-180 497.333 1074.242)"
                        className="prefix__st3"
                        d="M460.6 1073.3h73.5v1.8h-73.5z"
                    />
                    <path
                        transform="rotate(-90 502.518 1073.87)"
                        className="prefix__st3"
                        d="M482.7 1072.9h39.5v1.8h-39.5z"
                    />
                    <path
                        transform="rotate(-90 472.736 1065.598)"
                        className="prefix__st3"
                        d="M463.3 1064.7h18.9v1.8h-18.9z"
                    />
                    <path
                        transform="rotate(-90 461.313 1103.285)"
                        className="prefix__st3"
                        d="M446.5 1102.4h29.7v1.8h-29.7z"
                    />
                    <path
                        transform="rotate(-90 461.437 1075.722)"
                        className="prefix__st3"
                        d="M459 1074.8h4.8v1.8H459z"
                    />
                    <path
                        transform="rotate(-180 444.412 1092.4)"
                        className="prefix__st3"
                        d="M426.5 1091.5h35.7v1.8h-35.7z"
                    />
                    <path
                        transform="rotate(-180 466.314 1106.507)"
                        className="prefix__st3"
                        d="M460.7 1105.6h11.1v1.8h-11.1z"
                    />
                    <path
                        transform="rotate(-180 507.214 1106.392)"
                        className="prefix__st3"
                        d="M480.4 1105.5h53.7v1.8h-53.7z"
                    />
                    <path
                        transform="rotate(-90 437.99 780.487)"
                        className="prefix__st3"
                        d="M415.4 779.6h45.3v1.8h-45.3z"
                    />
                    <path
                        transform="rotate(-90 363.73 917.038)"
                        className="prefix__st3"
                        d="M358.9 916.1h9.6v1.8h-9.6z"
                    />
                    <path
                        transform="rotate(-90 363.664 938.843)"
                        className="prefix__st3"
                        d="M355.9 937.9h15.6v1.8h-15.6z"
                    />
                    <path
                        transform="rotate(-90 329.832 949.198)"
                        className="prefix__st3"
                        d="M325.9 948.3h7.9v1.8h-7.9z"
                    />
                    <path className="prefix__st3" d="M328.9 944.7h35.3v1.8h-35.3z"/>
                    <path
                        transform="rotate(-90 329.701 991.296)"
                        className="prefix__st3"
                        d="M301.8 990.4h55.9v1.8h-55.9z"
                    />
                    <path
                        transform="rotate(-180 313.474 982.405)"
                        className="prefix__st3"
                        d="M296.3 981.5h34.3v1.8h-34.3z"
                    />
                    <path
                        transform="rotate(-180 518.65 696.148)"
                        className="prefix__st3"
                        d="M470 695.2h97.3v1.8H470z"
                    />
                    <path
                        transform="rotate(-180 518.43 663.174)"
                        className="prefix__st3"
                        d="M469.8 662.3H567v1.8h-97.2z"
                    />
                    <path
                        transform="rotate(-180 518.959 565)"
                        className="prefix__st3"
                        d="M470.4 564.1h97v1.8h-97z"
                    />
                    <path
                        transform="rotate(90 565.48 232.071)"
                        className="prefix__st3"
                        d="M537.8 230.1h55.4v4h-55.4z"
                    />
                    <path
                        className="prefix__st3"
                        d="M470.4 239.9h96.2v1.8h-96.2zM437.6 240.1h22.2v1.8h-22.2z"
                    />
                    <path
                        transform="rotate(90 498.404 212.734)"
                        className="prefix__st3"
                        d="M492.7 211.8h11.5v1.8h-11.5z"
                    />
                    <path
                        transform="rotate(90 498.077 235.76)"
                        className="prefix__st3"
                        d="M492.3 234.8h11.5v1.8h-11.5z"
                    />
                    <path
                        transform="rotate(-90 485.015 335.913)"
                        className="prefix__st3"
                        d="M473.4 335h23.3v1.8h-23.3z"
                    />
                    <path
                        transform="rotate(38.739 483.29 323.354)"
                        className="prefix__st3"
                        d="M480.6 322.4h5.3v1.8h-5.3z"
                    />
                    <path
                        className="prefix__st3"
                        d="M437.2 300h16.3v4h-16.3zM467.7 300h99.1v4h-99.1z"
                    />
                    <path
                        transform="rotate(90 546.699 339.764)"
                        className="prefix__st3"
                        d="M519.2 338.8h54.9v1.8h-54.9z"
                    />
                    <path
                        transform="rotate(-90 297.263 1013.934)"
                        className="prefix__st3"
                        d="M291.1 1013h12.3v1.8h-12.3z"
                    />
                    <path
                        transform="rotate(-90 296.915 1040.498)"
                        className="prefix__st3"
                        d="M291.1 1039.6h11.7v1.8h-11.7z"
                    />
                    <path
                        transform="rotate(90 433.287 207.848)"
                        className="prefix__st3"
                        d="M429.8 206.9h6.9v1.8h-6.9z"
                    />
                    <path
                        transform="rotate(90 433.287 230.19)"
                        className="prefix__st3"
                        d="M429.1 229.3h8.5v1.8h-8.5z"
                    />
                    <path
                        transform="rotate(90 475.026 223.658)"
                        className="prefix__st3"
                        d="M456.9 222.7h36.2v1.8h-36.2z"
                    />
                    <path
                        transform="rotate(90 438.199 244.833)"
                        className="prefix__st3"
                        d="M426.6 243.9h23.1v1.8h-23.1z"
                    />
                    <path
                        className="prefix__st11"
                        d="M407.7 262.4l24.2 14.1M407.5 276.8l24.7-14.5"
                    />
                    <path
                        transform="rotate(90 487.053 868.48)"
                        className="prefix__st4"
                        d="M474.5 861h25v14.9h-25z"
                    />
                    <path
                        className="prefix__st11"
                        d="M494.1 856.8L480 881M479.7 856.6l14.5 24.6"
                    />
                    <path
                        transform="rotate(90 503.977 871.752)"
                        className="prefix__st4"
                        d="M494.4 865.4h19.2v12.7h-19.2z"
                    />
                    <path
                        className="prefix__st11"
                        d="M510.2 862.5l-12 18.5M498 862.3l12.3 18.9"
                    />
                    <path
                        transform="rotate(-90 297.12 979.931)"
                        className="prefix__st3"
                        d="M291.3 979H303v1.8h-11.7z"
                    />
                    <path className="prefix__st3" d="M296.9 1010.5h33v1.8h-33z"/>
                    <path
                        transform="rotate(-90 329.701 1039.139)"
                        className="prefix__st3"
                        d="M325.2 1038.2h9v1.8h-9z"
                    />
                    <path
                        className="prefix__st3"
                        d="M364.6 945.2c-.4 15.8-12 30.7-28.9 36.5-2 .7-5.3 1.2-7.3 1.6l-.4-1.5c1.9-.4 3.7-1 5.6-1.6 16.9-5.1 27.7-18.9 29.3-35h1.7z"
                    />
                    <path
                        transform="rotate(-180 518.358 1010.038)"
                        className="prefix__st3"
                        d="M472.7 1009.1h91.4v1.8h-91.4z"
                    />
                    <path
                        transform="rotate(-90 509.83 1017.262)"
                        className="prefix__st3"
                        d="M502.4 1016.3h14.9v1.8h-14.9z"
                    />
                    <path
                        transform="rotate(-180 518.959 500.212)"
                        className="prefix__st3"
                        d="M470.4 499.3h97v1.8h-97z"
                    />
                    <path
                        transform="rotate(-180 518.698 434.837)"
                        className="prefix__st3"
                        d="M470.2 433.9h97v1.8h-97z"
                    />
                    <path
                        transform="rotate(-90 470.867 497.664)"
                        className="prefix__st3"
                        d="M443 496.7h55.8v1.8H443z"
                    />
                    {!!cabinets &&
                    cabinets.map(cabinet => {
                        return <g id="prefix__Layer_3">
                            <text
                                transform={"translate(" + (cabinet.point_x - 10) + " " + (cabinet.point_y - 10) + ")"}
                                className={cabinet.id}
                                onClick={() => onClickCabinet(cabinet.id)}
                                key={cabinet.id + "name"}
                                cursor={"pointer"}
                            >
                                {cabinet.name}
                            </text>
                            {isNumeric(cabinet.id) &&
                            <text
                                transform={"translate(" + (cabinet.point_x - 10) + " " + (+cabinet.point_y + 10) + ")"}
                                className={cabinet.id}
                                onClick={() => onClickCabinet(cabinet.id)}
                                key={cabinet.id + "id"}
                                cursor={"pointer"}
                            >
                                {cabinet.id}
                            </text>
                            }
                        </g>
                    })}
                </g>
            </svg>
        )
    }

    if (id === 3) {
        return <svg viewBox="210 180 450 950">
            <style>
                {
                    ".prefix__st1,.prefix__st2{fill:none;stroke-miterlimit:10}.prefix__st1{stroke:#000;stroke-width:.12;stroke-linecap:round;stroke-linejoin:round}.prefix__st2{stroke:#939393;stroke-width:.5}.prefix__st3{fill:#939393}.prefix__st4,.prefix__st5{fill:none;stroke:#939393;stroke-width:.75;stroke-miterlimit:10}.prefix__st5{stroke:#000;stroke-width:1.5}.prefix__st6{font-family:&apos;Roboto-Black&apos;}.prefix__st7{font-size:13.0625px}.prefix__st11{fill:#939393;stroke:#939393;stroke-width:.5;stroke-miterlimit:10}"
                }
            </style>
            <path
                d="M473.7 1041.8l91.8-.3v76.3l-137 .8H297.3l-1.1-76.2 3.6 1 123.7.3 13.5-1.8.1-84.3-.1-49.3-.1-407.6-1.9-3.5-5.3-6.4-6.5-10.7-2.8-16.1 3.6-13.8 4.6-8.9 8.4-9.4.3-117-.2-31.2-35.5-1.3 1.3-24.9 34.5-2.3.7-15 127.4-.1-.4 59.3 1.5 67.3-94.5 1.5-.1 2.3v52.6l7 2.2 9.5 5.4 4 3.3h71.9l1.7 39.2-61.3.2-7.5 17s-3 3.5-4.1 4.6c-1.1 1.1-4.9 4.3-4.9 4.3l-16.4 7.4.2 341.8 43.9-.4-.1 37.6h49l.7 90.6h-91.3l-.6 65.5z"
                fill="#e3e4e5"
                id="prefix__Layer_3"
            />
            <g id="prefix__Layer_1">
                <path
                    className="prefix__st1"
                    d="M298.2 1110.2v5.5M433.3 205.8h3.1M436.4 207h126.3M298.2 1110.2v5.5M299.7 232.2h134.5M225 383.8v3.8M437.3 652.8h1.5M436.4 205.8v1.2M436.4 207.7h51.4M562.1 207.5l.6.8M562.1 209l.6.8M562.1 208.7l.6-.8M562.1 210.2l.6-.8M561.6 207l.5.5M559.9 207l.7.7M558.4 207l.8.7M556.7 207l.9.7M555.4 207l.5.7M553.7 207l.8.7M552.3 207l.8.7M550.6 207l.9.7M549.2 207l.6.7M547.6 207l.8.7M546.1 207l.6.7M544.4 207l1 .7M543 207l.7.7M541.4 207l.8.7M540 207l.5.7M538.3 207l.8.7M536.9 207l.6.7M535.3 207l.8.7M533.9 207l.5.7M532.2 207l.8.7M530.7 207l.7.7M529 207l.9.7M527.7 207l.6.7M526 207l.8.7M524.6 207l.6.7M522.9 207l.9.7M521.5 207l.6.7M519.9 207l.8.7M518.2 207l.8.7M516.8 207l.9.7M515.3 207l.7.7M513.8 207l.7.7M512.1 207l.7.7M510.6 207l.8.7M508.9 207l.9.7M507.6 207l.8.7M505.9 207l.8.7M504.5 207l.8.7M502.8 207l.9.7M501.3 207l1 .7M499.8 207l.8.7M498.3 207l.8.7M496.6 207l1 .7M495.2 207l.9.7M493.6 207l.8.7M492.2 207l.8.7M490.5 207l.8.7M489.1 207l.6.7M487.5 207l.8.7M486.1 207l.7.7M484.4 207l.7.7M482.9 207l.7.7M481.2 207l.9.7M479.8 207l.9.7M478.2 207l.8.7M476.8 207l.6.7M475.1 207l.9.7M473.7 207l.6.7M472.1 207l.8.7M470.6 207l.6.7M468.9 207l.8.7M467.5 207l.7.7M465.9 207l.8.7M464.5 207l.5.7M462.8 207l.8.7M461.4 207l.6.7M459.7 207l.9.7M458.4 207l.5.7M456.7 207l.8.7M455.2 207l.7.7M453.5 207l.9.7M452 207l.8.7M450.5 207l.8.7M449.1 207l.5.7M447.4 207l.9.7M445.8 207l.8.7M444.4 207l.8.7M443 207l.5.7M441.3 207l.7.7M439.7 207l.8.7M438.3 207l.7.7M436.8 207l.5.7M436.6 207.7l.7-.7M438.1 207.7l.7-.7M439.6 207.7l.7-.7M441 207.7l1-.7M442.7 207.7l.8-.7M444.3 207.7l.6-.7M445.8 207.7l.7-.7M447.4 207.7l.8-.7M448.8 207.7l.8-.7M450.4 207.7l.7-.7M452 207.7l.6-.7M453.5 207.7l.8-.7M455 207.7l.8-.7M456.5 207.7l1-.7M458.1 207.7l.7-.7M459.7 207.7l.8-.7M461.1 207.7l.9-.7M462.7 207.7l.9-.7M464.2 207.7l.8-.7M465.8 207.7l.7-.7M467.5 207.7l.7-.7M468.8 207.7l.9-.7M470.4 207.7l.8-.7M472 207.7l.6-.7M473.7 207.7l.6-.7M475.1 207.7l.8-.7M476.5 207.7l.9-.7M478.1 207.7l.6-.7M479.8 207.7l.6-.7M481.2 207.7l.8-.7M482.7 207.7l.9-.7M484.2 207.7l.9-.7M485.9 207.7l.7-.7M487.4 207.7l.7-.7M488.8 207.7l.9-.7M490.4 207.7l.9-.7M492.1 207.7l.6-.7M493.5 207.7l.8-.7M495.2 207.7l.7-.7M496.5 207.7l.9-.7M498.2 207.7l.7-.7M499.6 207.7l.8-.7M501.3 207.7l.7-.7M502.8 207.7l.8-.7M504.3 207.7l1-.7M505.8 207.7l.8-.7M507.5 207.7l.6-.7M508.9 207.7l.8-.7M510.5 207.7l.9-.7M512.1 207.7l.7-.7M513.6 207.7l.7-.7M515.3 207.7l.5-.7M516.5 207.7l1-.7M518.2 207.7l.8-.7M519.8 207.7l.6-.7M521.5 207.7l.5-.7M522.9 207.7l.8-.7M524.3 207.7l.8-.7M525.9 207.7l.7-.7M527.5 207.7l.6-.7M529 207.7l.8-.7M530.5 207.7l.8-.7M532 207.7l1-.7M533.6 207.7l.8-.7M535.2 207.7l.8-.7M536.6 207.7l.8-.7M538.2 207.7l.9-.7M539.7 207.7l.8-.7M541.3 207.7l.8-.7M543 207.7l.5-.7M544.4 207.7l.8-.7M545.9 207.7l.8-.7M547.5 207.7l.7-.7M549.2 207.7l.5-.7M550.6 207.7l.8-.7M552 207.7l.8-.7M553.6 207.7l.9-.7M555.3 207.7l.5-.7M556.7 207.7l.8-.7M558.2 207.7l.7-.7M559.7 207.7l.9-.7M561.4 207.7l.7-.7M299.7 982v-.2M299.7 369.9v.1M432.9 1117.3l3.7 3.8M432.9 1118.1l3 3M432.9 1119l2.2 2.1M432.9 1119.6l1.4 1.5M432.9 1120.4l.5.7M299.7 500.7h.1M299.7 631.4h.2M299.7 783.9h.2M299.7 914.6v.3M437.3 846.2h.2M489.5 207.7h72.6M299.5 979.9h.2M433 494.7l1.7 1.7M433 495.4l1.7 1.7M437.3 431.8l.4.4M438.6 502.5l.2.3M437.9 502.5l.9.9M437.3 502.5l1.5 1.7M437.3 503.4l1.5 1.6M437.3 504.2l1.5 1.7M437.3 505l1.5 1.5M437.3 505.6l1.5 1.7M437.3 506.4l1.5 1.7M437.3 507.3l1.5 1.6M437.3 508.1l1.5 1.7M437.3 508.9l1.5 1.4M437.3 509.6l1.5 1.5M437.3 510.3l1.5 1.7M437.3 511.1l1.5 1.6M437.3 511.8l1.5 1.7M437.3 512.6l1.5 1.7M437.3 513.5l1.5 1.5M437.3 514.3l1.5 1.7M437.3 515l1.5 1.6M437.3 515.7l1.5 1.7M437.3 516.5l1.5 1.7M437.3 517.4l1.5 1.4M437.3 517.9l1.5 2M437.3 518.8l1.5 1.6M437.3 519.6l1.5 1.6M437.3 652.1l.8.7"
                />
                <path
                    className="prefix__st3"
                    d="M490.9 883h10.2v4.6h-10.2zM473.3 882.9h10.1v4.7h-10.1z"
                />
                <path
                    transform="rotate(90 475.617 868.382)"
                    className="prefix__st3"
                    d="M456.5 866h38.3v4.7h-38.3z"
                />
                <path className="prefix__st3" d="M473.4 849.3h43.3v4.7h-43.3z"/>
                <path
                    transform="rotate(90 514.408 868.921)"
                    className="prefix__st3"
                    d="M495.8 866.6H533v4.6h-37.2z"
                />
                <path className="prefix__st3" d="M508.3 883h7.2v4.6h-7.2z"/>
                <path
                    transform="rotate(-90 297.8 641.186)"
                    className="prefix__st3"
                    d="M-112.5 639.2H708v4h-820.5z"
                />
                <path
                    className="prefix__st3"
                    d="M295.8 231h145.4v4.1H295.8zM432.9 204.3h133.3v4.1H432.9zM435.2 503.2h-40.8v.5h3.3v11.1h-3.4v.5h29.1v4.6h11.8v-16.7zm-34.3 11.6h-2.7v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm3.2 0H411v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm3.3 0h-2.7v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm.5-11.1h10.7v11.1h-10.7v-11.1zm0 11.6h10.7v1.7h-10.7v-1.7zm0 2.3h10.7v1.7h-10.7v-1.7zM297.7 497.2h139.6v4H297.7z"
                />
                <path
                    transform="rotate(90 437.859 511.264)"
                    className="prefix__st3"
                    d="M425.5 510.2h24.6v2.1h-24.6z"
                />
                <path
                    transform="rotate(90 437.833 567.693)"
                    className="prefix__st3"
                    d="M408.8 566.7h58.1v2h-58.1z"
                />
                <path
                    className="prefix__st3"
                    d="M434.9 609.7h-11.5v4.7h-29.3v12.2h41v-16.9h-.2zm-.3.5v1.7h-10.7v-1.7h10.7zm-10.7 2.3h10.7v1.9h-10.7v-1.9zm-22.5 2.5h2.7v11h-2.7v-11zm-.6 11h-2.7v-11h2.7v11zm3.8-11h2.7v11h-2.7v-11zm3.2 0h2.7v11h-2.7v-11zm3.2 0h2.7v11H411v-11zm3.2 0h2.7v11h-2.7v-11zm3.2 0h2.7v11h-2.7v-11zm-19.8 0v11h-3v-11h3zm23.1 11v-11h2.7v11h-2.7zm3.2 0v-11h10.7v11h-10.7zM297.8 628.6h141.1v4H297.8z"
                />
                <path
                    transform="rotate(90 437.736 630.993)"
                    className="prefix__st3"
                    d="M415 630h45.5v2.1H415z"
                />
                <path
                    transform="rotate(90 437.99 702.242)"
                    className="prefix__st3"
                    d="M404.3 701.2h67.4v2.1h-67.4z"
                />
                <path className="prefix__st2" d="M302.1 626.4h92.2v-123h-92.2v123"/>
                <path
                    className="prefix__st3"
                    d="M296.5 906.2H437v4H296.5zM436.9 406h2.1v26.2h-2.1z"
                />
                <path
                    transform="rotate(-90 438.199 369.807)"
                    className="prefix__st3"
                    d="M413.4 368.7H463v2.1h-49.6z"
                />
                <path
                    className="prefix__st3"
                    d="M296.2 365.2h141.4v4H296.2zM434.8 371.3H394v.5h3.3v11.1h-3.4v.5H423v4.6h11.8v-16.7zm-34.3 11.6h-2.7v-11.1h2.7v11.1zm3.2 0H401v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm3.3 0h-2.7v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm.5-11.1h10.7v11.1h-10.7v-11.1zm0 11.6h10.7v1.7h-10.7v-1.7zm0 2.3h10.7v1.7h-10.7v-1.7zM397.9 495h16.9v-41h-12.2v29.3h-4.7V495zm.5-11.2h1.7v10.7h-1.7v-10.7zm4.2 0v10.7h-1.9v-10.7h1.9zm11.6-22.5v2.7h-11.1v-2.7h11.1zm-11.1-.6V458h11.1v2.7h-11.1zm11.1 3.8v2.7h-11.1v-2.7h11.1zm0 3.2v2.7h-11.1v-2.7h11.1zm0 3.2v2.7h-11.1v-2.7h11.1zm0 3.2v2.7h-11.1v-2.7h11.1zm0 3.2v2.7h-11.1v-2.7h11.1zm-11.1-22.8h11.1v3h-11.1v-3zm11.1 28.8h-11.1v-2.7h11.1v2.7zm0 11.2h-11.1v-10.7h11.1v10.7z"
                />
                <path className="prefix__st2" d="M301.7 494.5h92.2V371.6h-92.2v122.9"/>
                <path
                    transform="rotate(-90 438.003 306.477)"
                    className="prefix__st3"
                    d="M413.9 305.6h48.3v1.8h-48.3z"
                />
                <path
                    className="prefix__st3"
                    d="M434.5 346.3H423v4.7h-29.3v12.2h41v-16.9h-.2zm-.3.5v1.7h-10.7v-1.7h10.7zm-10.7 2.3h10.7v1.9h-10.7v-1.9zm-22.5 2.5h2.7v11.1H401v-11.1zm-.6 11h-2.7v-11.1h2.7v11.1zm3.8-11h2.7v11.1h-2.7v-11.1zm3.2 0h2.7v11.1h-2.7v-11.1zm3.2 0h2.7v11.1h-2.7v-11.1zm3.2 0h2.7v11.1h-2.7v-11.1zm3.2 0h2.7v11.1H417v-11.1zm-19.8 0v11.1h-3v-11.1h3zm23.1 11v-11.1h2.7v11.1h-2.7zm3.2 0v-11.1h10.7v11.1h-10.7z"
                />
                <path className="prefix__st2" d="M301.7 363h92.2V237.3h-92.2V363"/>
                <path
                    transform="rotate(-90 436.574 278.986)"
                    className="prefix__st3"
                    d="M431.9 276.6h9.3v4.7h-9.3z"
                />
                <path className="prefix__st3" d="M400.4 278.9h38.5v4.7h-38.5z"/>
                <path
                    transform="rotate(-90 402.808 269.153)"
                    className="prefix__st3"
                    d="M388.3 266.8h28.9v4.7h-28.9z"
                />
                <path className="prefix__st3" d="M401.5 254.7h37.6v4.6h-37.6z"/>
                <path
                    transform="rotate(-90 436.831 259.22)"
                    className="prefix__st3"
                    d="M432.3 256.9h9.1v4.6h-9.1z"
                />
                <path
                    transform="rotate(-90 565.48 690.35)"
                    className="prefix__st3"
                    d="M134.9 688.4H996v4H134.9z"
                />
                <path
                    transform="rotate(-90 297.8 1081.492)"
                    className="prefix__st3"
                    d="M258.2 1079.5h79.3v4h-79.3z"
                />
                <path className="prefix__st3" d="M295.8 1117.3h271.6v4H295.8z"/>
                <path
                    transform="rotate(90 439.34 236.15)"
                    className="prefix__st3"
                    d="M434.2 234.1h10.3v4.1h-10.3z"
                />
                <path
                    className="prefix__st3"
                    d="M434.8 635.3H394v.5h3.3v11.1h-3.4v.5H423v4.6h11.8v-16.7zm-34.3 11.6h-2.7v-11.1h2.7v11.1zm3.2 0H401v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm3.3 0h-2.7v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm.5-11.1h10.7v11.1h-10.7v-11.1zm0 11.6h10.7v1.7h-10.7v-1.7zm0 2.3h10.7v1.7h-10.7v-1.7zM296.4 767.6H439v4H296.4z"
                />
                <path className="prefix__st2" d="M540 300.5h25.5v-59.6H540v59.6"/>
                <path
                    className="prefix__st3"
                    d="M508.5 257.8v27h31.6v-27h-31.6zm7.2.5h2.9v26h-2.9v-26zm-.5 25.9h-2.9v-26h2.9v26zm4-25.9h2.9v26h-2.9v-26zm3.4 0h2.9v26h-2.9v-26zm3.5 0h2.9v26h-2.9v-26zm3.5 0h2.9v26h-2.9v-26zm3.4 0h2.9v26H533v-26zm-24 0h2.7v26H509v-26zm30.5 25.9h-3.1v-26h3.1v26z"
                />
                <path className="prefix__st2" d="M337.2 1043h-39.4v75.5h39.4V1043"/>
                <path
                    className="prefix__st3"
                    d="M368.6 1096.5v-32.8H337v32.8h31.6zm-7.3-.7h-2.9v-31.5h2.9v31.5zm.5-31.5h2.9v31.5h-2.9v-31.5zm-4 31.5h-2.9v-31.5h2.9v31.5zm-3.4 0h-2.9v-31.5h2.9v31.5zm-3.5 0H348v-31.5h2.9v31.5zm-3.4 0h-2.9v-31.5h2.9v31.5zm-3.5 0h-2.9v-31.5h2.9v31.5zm24 0h-2.7v-31.5h2.7v31.5zm-30.5-31.5h3.1v31.5h-3.1v-31.5z"
                />
                <path className="prefix__st4" d="M407.4 262h25v14.9h-25z"/>

                <circle className="prefix__st5" cx={517.5} cy={1089.3} r={2.2}/>
                <path d="M518.2 1062.2h-1.5l-4 7.7h9.6l-4.1-7.7zm-.7 1.4l2.7 5.2h-5.4l2.7-5.2z"/>
                <circle className="prefix__st5" cx={517.5} cy={1060.2} r={2.2}/>
                <path d="M516.8 1100.6h1.4l4-8.8h-9.4l4 8.8zm.7-1.5l-2.7-5.9h5.3l-2.6 5.9z"/>
                <circle className="prefix__st5" cx={530} cy={346.8} r={2.2}/>
                <path d="M530.9 316.5h-1.5l-4 7.7h9.6l-4.1-7.7zm-.7 1.4l2.7 5.2h-5.4l2.7-5.2z"/>
                <circle className="prefix__st5" cx={530.3} cy={314.5} r={2.2}/>
                <path d="M529.2 358.2h1.4l4-8.8h-9.4l4 8.8zm.7-1.5l-2.7-5.9h5.3l-2.6 5.9z"/>
                <path
                    className="prefix__st3"
                    d="M490.8 698.8h-16.9v37.7H486v-26.9h4.7v-10.8zm-.6 10.3h-1.7v-9.8h1.7v9.8zm-4.2 0v-9.8h1.9v9.8H486zm-11.6 20.7v-2.5h11.1v2.5h-11.1zm11.1.5v2.5h-11.1v-2.5h11.1zm-11.1-3.5v-2.4h11.1v2.4h-11.1zm0-2.9v-2.5h11.1v2.5h-11.1zm0-2.9v-2.5h11.1v2.5h-11.1zm0-3v-2.5h11.1v2.5h-11.1zm0-2.9v-2.5h11.1v2.5h-11.1zm11.1 20.9h-11.1v-2.8h11.1v2.8zm-11.1-26.4h11.1v2.5h-11.1v-2.5zm0-10.3h11.1v9.8h-11.1v-9.8zM491.1 845.9V835h-4.7v-27.8h-12.2v39h16.9v-.3zm-.5-.3h-1.7v-10.2h1.7v10.2zm-2.3-10.1v10.2h-1.9v-10.2h1.9zm-2.4-21.4v2.5h-11.1v-2.5h11.1zm-11.1-.5V811h11.1v2.5h-11.1zm11.1 3.5v2.5h-11.1v-2.5h11.1zm0 3.1v2.5h-11.1v-2.5h11.1zm0 3v2.5h-11.1v-2.5h11.1zm0 3.1v2.5h-11.1v-2.5h11.1zm0 3v2.6h-11.1v-2.6h11.1zm0-18.8h-11.1v-2.9h11.1v2.9zm-11.1 21.9h11.1v2.5h-11.1v-2.5zm0 3.1h11.1v10.2h-11.1v-10.2z"
                />
                <path className="prefix__st2" d="M498.2 845.6h62.9V698.8h-62.9v146.8"/>

                <path
                    className="prefix__st3"
                    d="M508.5 285.8V300h31.6v-14.1h-31.6zm7.2.3h2.9v13.6h-2.9v-13.6zm-.5 13.6h-2.9v-13.6h2.9v13.6zm4-13.6h2.9v13.6h-2.9v-13.6zm3.4 0h2.9v13.6h-2.9v-13.6zm3.5 0h2.9v13.6h-2.9v-13.6zm3.5 0h2.9v13.6h-2.9v-13.6zm3.4 0h2.9v13.6H533v-13.6zm-24 0h2.7v13.6H509v-13.6zm30.5 13.6h-3.1v-13.6h3.1v13.6zM508.5 241.3v15.4h31.6v-15.4h-31.6zm7.2.3h2.9v14.8h-2.9v-14.8zm-.5 14.8h-2.9v-14.8h2.9v14.8zm4-14.8h2.9v14.8h-2.9v-14.8zm3.4 0h2.9v14.8h-2.9v-14.8zm3.5 0h2.9v14.8h-2.9v-14.8zm3.5 0h2.9v14.8h-2.9v-14.8zm3.4 0h2.9v14.8H533v-14.8zm-24 0h2.7v14.8H509v-14.8zm30.5 14.8h-3.1v-14.8h3.1v14.8zM492.4 433.9c-1.3-1.2-2.6-2.3-4-3.3l-1 1.8c.7.5 1.3 1 2 1.6.7.6 1.4 1.2 2.1 1.9h2.9l-2-2zm-22.5-11.3v2.1c.6.1 1.3.3 1.9.4 2.1.5 4.1 1.1 6 1.9l1-1.8c-2.3-.9-4.6-1.7-7-2.2-.6-.2-1.2-.3-1.9-.4zm16.9 75.3c-4.3 3.1-9.3 5.4-14.6 6.7-.6.1-1.2.3-1.8.4-2.5.5-5.1.7-7.7.7-1.3 0-2.7-.1-4-.2v1.9c1.3.1 2.6.2 4 .2 2.6 0 5.2-.2 7.7-.7.6-.1 1.2-.2 1.8-.4 5.9-1.3 11.4-3.9 16-7.3l-1.4-1.3zm16.2-26.3l-.3 1.8c-1.1 5.7-3.5 11.1-6.9 15.6l1.4 1.4c3.7-5 6.3-10.8 7.5-17l.3-1.8h-2zm-81.2-6.2c0-13 6-24.5 15.2-31.9.6-.5 1.3-1 2-1.5v-2.3c-.7.5-1.4.9-2 1.4-10.3 7.6-17.1 20.2-17.1 34.3 0 18.6 11.7 34.4 27.9 40v-2c-15.2-5.5-26-20.5-26-38zM434.2 748.4h-11.5v4.7h-29.2v12.2h41v-16.9h-.3zm-.3.5v1.7h-10.7v-1.7h10.7zm-10.6 2.3H434v1.9h-10.7v-1.9zm-22.6 2.5h2.7v11.1h-2.7v-11.1zm-.5 11h-2.7v-11.1h2.7v11.1zm3.7-11h2.7v11.1h-2.7v-11.1zm3.2 0h2.7v11.1h-2.7v-11.1zm3.3 0h2.7v11.1h-2.7v-11.1zm3.2 0h2.7v11.1h-2.7v-11.1zm3.2 0h2.7v11.1h-2.7v-11.1zm-19.8 0v11.1h-3v-11.1h3zm23 11v-11.1h2.7v11.1H420zm3.3 0v-11.1H434v11.1h-10.7z"
                />
                <path className="prefix__st2" d="M301.5 765.1h92.1V635.3h-92.1v129.8"/>
                <path
                    transform="rotate(90 437.99 840.876)"
                    className="prefix__st3"
                    d="M404.3 839.8h67.4v2.1h-67.4z"
                />
                <path
                    className="prefix__st3"
                    d="M434.8 773.9H394v.5h3.3v11.1h-3.4v.5H423v4.6h11.8v-16.7zm-34.3 11.6h-2.7v-11.1h2.7v11.1zm3.2 0H401v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm3.3 0h-2.7v-11.1h2.7v11.1zm3.2 0h-2.7v-11.1h2.7v11.1zm.5-11.1h10.7v11.1h-10.7v-11.1zm0 11.7h10.7v1.7h-10.7v-1.7zm0 2.3h10.7v1.7h-10.7v-1.7z"
                />
                <path
                    className="prefix__st3"
                    d="M434.2 887h-11.5v4.7h-29.2v12.2h41V887h-.3zm-.3.6v1.7h-10.7v-1.7h10.7zm-10.6 2.2H434v1.9h-10.7v-1.9zm-22.6 2.5h2.7v11.1h-2.7v-11.1zm-.5 11.1h-2.7v-11.1h2.7v11.1zm3.7-11.1h2.7v11.1h-2.7v-11.1zm3.2 0h2.7v11.1h-2.7v-11.1zm3.3 0h2.7v11.1h-2.7v-11.1zm3.2 0h2.7v11.1h-2.7v-11.1zm3.2 0h2.7v11.1h-2.7v-11.1zm-19.8 0v11.1h-3v-11.1h3zm23 11.1v-11.1h2.7v11.1H420zm3.3 0v-11.1H434v11.1h-10.7z"
                />
                <path className="prefix__st2" d="M301.5 903.7h92.1V773.9h-92.1v129.8"/>
                <path
                    transform="rotate(90 437.99 978.376)"
                    className="prefix__st3"
                    d="M404.8 977.3h66.5v2.1h-66.5z"
                />
                <path
                    className="prefix__st3"
                    d="M434.8 912.4H394v.5h3.3v10.9h-3.4v.5H423v4.5h11.8v-16.4zm-34.3 11.4h-2.7v-10.9h2.7v10.9zm3.2 0H401v-10.9h2.7v10.9zm3.2 0h-2.7v-10.9h2.7v10.9zm3.2 0h-2.7v-10.9h2.7v10.9zm3.2 0h-2.7v-10.9h2.7v10.9zm3.2 0h-2.7v-10.9h2.7v10.9zm3.3 0h-2.7v-10.9h2.7v10.9zm3.2 0h-2.7v-10.9h2.7v10.9zm.5-10.9h10.7v10.9h-10.7v-10.9zm0 11.4h10.7v1.7h-10.7v-1.7zm0 2.3h10.7v1.7h-10.7v-1.7z"
                />
                <path
                    className="prefix__st3"
                    d="M434.2 1023.9h-11.5v4.7h-29.2v12h41v-16.7h-.3zm-.3.5v1.7h-10.7v-1.7h10.7zm-10.6 2.3H434v1.9h-10.7v-1.9zm-22.6 2.4h2.7v10.9h-2.7v-10.9zm-.5 10.9h-2.7v-10.9h2.7v10.9zm3.7-10.9h2.7v10.9h-2.7v-10.9zm3.2 0h2.7v10.9h-2.7v-10.9zm3.3 0h2.7v10.9h-2.7v-10.9zm3.2 0h2.7v10.9h-2.7v-10.9zm3.2 0h2.7v10.9h-2.7v-10.9zm-19.8 0v10.9h-3v-10.9h3zm23 10.9v-10.9h2.7v10.9H420zm3.3 0v-10.9H434v10.9h-10.7z"
                />
                <path className="prefix__st2" d="M301.5 1040.3h92.1v-128h-92.1v128"/>
                <path
                    className="prefix__st3"
                    d="M336.9 1043.4v16.8h31.6v-16.8h-31.6zm7.3.3h2.9v16.1h-2.9v-16.1zm-.5 16.1h-2.9v-16.1h2.9v16.1zm4-16.1h2.9v16.1h-2.9v-16.1zm3.4 0h2.9v16.1h-2.9v-16.1zm3.5 0h2.9v16.1h-2.9v-16.1zm3.4 0h2.9v16.1H358v-16.1zm3.5 0h2.9v16.1h-2.9v-16.1zm-24 0h2.7v16.1h-2.7v-16.1zm30.5 16.1h-3v-16.1h3.1v16.1zM337.1 1100v17.3h31.6V1100h-31.6zm7.3.3h2.9v16.6h-2.9v-16.6zm-.6 16.6h-2.9v-16.6h2.9v16.6zm4-16.6h2.9v16.6h-2.9v-16.6zm3.5 0h2.9v16.6h-2.9v-16.6zm3.5 0h2.9v16.6h-2.9v-16.6zm3.4 0h2.9v16.6h-2.9v-16.6zm3.5 0h2.9v16.6h-2.9v-16.6zm-24.1 0h2.7v16.6h-2.7v-16.6zm30.6 16.6h-3.1v-16.6h3.1v16.6z"
                />
                <path
                    d="M518.1 998c.4.2.8.4 1.1.7l-2.1 3.6c-.4-.2-.8-.4-1.1-.7l2.1-3.6zM516.6 998.6l-2.1 3.6c-.4-.2-.8-.4-1.1-.7l2.1-3.6c.3.3.7.5 1.1.7zM519.8 1002.2c-.4-.2-.8-.4-1.1-.7l2.1-3.6c.4.2.8.4 1.1.7-.8 1.2-1.5 2.4-2.1 3.6zM524.3 1004.7H510h-.1V1008.6c.3 2 1.2 3.7 2.8 4.9l.1.1h-1.4c-.4 0-.8.1-1.2 0v1.3h13.6v-1.3h-2.6v-.1c1.2-.9 2-2 2.5-3.4.1-.3.1-.3.5-.4 1.3 0 2.3-.9 2.5-2.1.4-1.5-.8-2.9-2.4-2.9zm-1.4 2c0 .6 0 1.3-.1 1.9-.2 1.7-1.1 3.1-2.5 4-1.7 1.2-3.6 1.4-5.5.6-2.2-.9-3.5-2.7-3.7-5.1-.1-.7 0-1.4 0-2.1v-.1H522.8c.1.4.1.6.1.8zm2.5 1.2c-.2.4-.6.6-1.1.6v-2.5c.5 0 .8.2 1.1.6.2.4.2.9 0 1.3z"/>
            </g>
            <g id="prefix__Layer_2">
                <path
                    transform="rotate(-90 470.736 308.17)"
                    className="prefix__st3"
                    d="M464.8 307.2h11.9v1.8h-11.9z"
                />
                <path
                    transform="rotate(-90 470.88 375.403)"
                    className="prefix__st3"
                    d="M453.4 374.5h35v1.8h-35z"
                />
                <path
                    className="prefix__st3"
                    d="M471.8 391.7v31.5c-.6-.2-1.2-.5-1.9-.6v-30.8h1.9z"
                />
                <path
                    transform="rotate(-41.565 472.613 356.918)"
                    className="prefix__st3"
                    d="M469.8 356h5.6v1.8h-5.6z"
                />
                <path
                    transform="rotate(-41.565 483.57 348.356)"
                    className="prefix__st3"
                    d="M481.1 347.4h4.9v1.8h-4.9z"
                />
                <path
                    transform="rotate(38.739 472.561 315.18)"
                    className="prefix__st3"
                    d="M469.8 314.2h5.6v1.8h-5.6z"
                />
                <path
                    transform="rotate(-180 515.997 336.41)"
                    className="prefix__st3"
                    d="M484.4 335.5h63.2v1.8h-63.2z"
                />
                <path
                    transform="rotate(-90 515.997 336.072)"
                    className="prefix__st3"
                    d="M494.8 335.1h42.3v1.8h-42.3z"
                />
                <path className="prefix__st3" d="M470 366.1h97.5v4H470z"/>
                <path
                    transform="rotate(-90 470.972 587)"
                    className="prefix__st3"
                    d="M421.2 586.1h99.5v1.8h-99.5z"
                />
                <path
                    transform="rotate(-90 470.972 693.05)"
                    className="prefix__st3"
                    d="M427.2 692.1h87.6v1.8h-87.6z"
                />
                <path
                    transform="rotate(-90 470.768 771.398)"
                    className="prefix__st3"
                    d="M446.9 770.5h47.8v1.8h-47.8z"
                />
                <path
                    transform="rotate(-90 471.038 828.339)"
                    className="prefix__st3"
                    d="M450.2 827.4h41.7v1.8h-41.7z"
                />
                <path
                    transform="rotate(-180 517.079 848.522)"
                    className="prefix__st3"
                    d="M470.1 847.6H564v1.8h-93.9z"
                />
                <path
                    transform="rotate(-90 475.16 855.02)"
                    className="prefix__st3"
                    d="M468 854.1h14.4v1.8H468z"
                />
                <path
                    transform="rotate(-180 524.499 886.618)"
                    className="prefix__st3"
                    d="M515.8 885.7h17.4v1.8h-17.4z"
                />
                <path
                    transform="rotate(-90 473.004 1000.003)"
                    className="prefix__st3"
                    d="M448.1 999.1h49.8v1.8h-49.8z"
                />
                <path
                    transform="rotate(-90 473.004 1043.23)"
                    className="prefix__st3"
                    d="M465.9 1042.3H480v1.8h-14.1z"
                />
                <path
                    transform="rotate(-90 422.409 1102.517)"
                    className="prefix__st3"
                    d="M407.4 1101.6h29.9v1.8h-29.9z"
                />
                <path
                    transform="rotate(-180 366.701 1042.696)"
                    className="prefix__st3"
                    d="M296.4 1041.8H437v1.8H296.4z"
                />
                <path
                    transform="rotate(-180 508.346 1042.762)"
                    className="prefix__st3"
                    d="M472.1 1041.8h72.5v1.8h-72.5z"
                />
                <path
                    transform="rotate(-90 533.076 1081.372)"
                    className="prefix__st3"
                    d="M494.5 1080.4h77.2v1.8h-77.2z"
                />
                <path
                    transform="rotate(-180 503.074 1079.242)"
                    className="prefix__st3"
                    d="M472.1 1078.3h62v1.8h-62z"
                />
                <path
                    transform="rotate(-90 502.518 1078.87)"
                    className="prefix__st3"
                    d="M482.7 1077.9h39.5v1.8h-39.5z"
                />
                <path
                    transform="rotate(-90 472.736 1077.889)"
                    className="prefix__st3"
                    d="M458.1 1077h29.2v1.8h-29.2z"
                />
                <path
                    transform="rotate(-90 472.642 1111.15)"
                    className="prefix__st3"
                    d="M465.7 1110.2h14v1.8h-14z"
                />
                <path
                    transform="rotate(-90 437.99 771.306)"
                    className="prefix__st3"
                    d="M414.7 770.4h46.6v1.8h-46.6z"
                />
                <path
                    transform="rotate(-180 518.65 696.148)"
                    className="prefix__st3"
                    d="M470 695.2h97.3v1.8H470z"
                />
                <path
                    transform="rotate(-180 518.959 565)"
                    className="prefix__st3"
                    d="M470.4 564.1h97v1.8h-97z"
                />
                <path
                    transform="rotate(90 565.48 232.071)"
                    className="prefix__st3"
                    d="M537.8 230.1h55.4v4h-55.4z"
                />
                <path
                    className="prefix__st3"
                    d="M470.4 239.9h22.3v1.8h-22.3zM437.6 240.1h22.2v1.8h-22.2z"
                />
                <path
                    transform="rotate(-90 485.015 335.913)"
                    className="prefix__st3"
                    d="M473.4 335h23.3v1.8h-23.3z"
                />
                <path
                    transform="rotate(38.739 483.29 323.354)"
                    className="prefix__st3"
                    d="M480.6 322.4h5.3v1.8h-5.3z"
                />
                <path
                    className="prefix__st3"
                    d="M437.2 300h16.3v4h-16.3zM467.7 300h99.1v4h-99.1z"
                />
                <path
                    transform="rotate(90 546.699 339.764)"
                    className="prefix__st3"
                    d="M519.2 338.8h54.9v1.8h-54.9z"
                />
                <path
                    transform="rotate(90 475.026 223.658)"
                    className="prefix__st3"
                    d="M456.9 222.7h36.2v1.8h-36.2z"
                />
                <path
                    transform="rotate(90 438.199 244.833)"
                    className="prefix__st3"
                    d="M426.6 243.9h23.1v1.8h-23.1z"
                />
                <path
                    className="prefix__st11"
                    d="M407.7 262.4l24.2 14.1M407.5 276.8l24.7-14.5"
                />
                <path
                    transform="rotate(90 487.053 868.48)"
                    className="prefix__st4"
                    d="M474.5 861h25v14.9h-25z"
                />
                <path
                    className="prefix__st11"
                    d="M494.1 856.8L480 881M479.7 856.6l14.5 24.6"
                />
                <path
                    transform="rotate(90 503.977 871.752)"
                    className="prefix__st4"
                    d="M494.4 865.4h19.2v12.7h-19.2z"
                />
                <path
                    className="prefix__st11"
                    d="M510.2 862.5l-12 18.5M498 862.3l12.3 18.9"
                />
                <path
                    transform="rotate(-180 518.358 976.038)"
                    className="prefix__st3"
                    d="M472.7 975.1h91.4v1.8h-91.4z"
                />
                <path
                    className="prefix__st3"
                    d="M535.4 471.3v1.8h-32.6c.1-.6.1-1.2.2-1.8h32.4zM536.1 433.9v1.9H493c-.3-.6-.7-1.3-1.1-1.9h44.2zM471.8 504.6v21h-1.9V505c.7-.1 1.3-.3 1.9-.4z"
                />
                <path
                    transform="rotate(-180 556.056 886.618)"
                    className="prefix__st3"
                    d="M547.3 885.7h17.4v1.8h-17.4z"
                />
                <path
                    transform="rotate(-180 561.118 1042.41)"
                    className="prefix__st3"
                    d="M554.8 1041.5h12.7v1.8h-12.7z"
                />
                <path className="prefix__st3" d="M505.6 239.9H566v1.8h-60.4z"/>
                <path
                    transform="rotate(-90 527.273 402.086)"
                    className="prefix__st3"
                    d="M493.6 401.2h67.3v1.8h-67.3z"
                />
                <path
                    transform="rotate(-90 526.553 518.614)"
                    className="prefix__st3"
                    d="M479.2 517.7h94.6v1.8h-94.6z"
                />
                <path
                    className="prefix__st3"
                    d="M549.5 435.8v-1.9h14.3c.1.6.2 1.3.4 1.9h-14.7zM549.5 473.2v-1.9h15c.1.6.2 1.3.4 1.9h-15.4z"
                />
                <path
                    transform="rotate(-90 437.99 908.556)"
                    className="prefix__st3"
                    d="M414.7 907.6h46.6v1.8h-46.6z"
                />
                <path
                    transform="rotate(-90 437.99 1034.255)"
                    className="prefix__st3"
                    d="M428.6 1033.3h18.7v1.8h-18.7z"
                />
                <path
                    transform="rotate(-90 422.409 1057.262)"
                    className="prefix__st3"
                    d="M407.2 1056.3h30.4v1.8h-30.4z"
                />
                <path
                    transform="rotate(90 433.82 219.727)"
                    className="prefix__st3"
                    d="M418.4 218.8h30.8v1.8h-30.8z"
                />
                <path
                    className="prefix__st3"
                    d="M470 563h97.5v4H470zM470 693.2h97.5v4H470z"
                />
                {!!cabinets &&
                cabinets.map(cabinet => {
                    return <g id="prefix__Layer_3">
                        <text
                            transform={"translate(" + (cabinet.point_x - 10) + " " + (cabinet.point_y - 10) + ")"}
                            className={cabinet.id}
                            onClick={() => onClickCabinet(cabinet.id)}
                            key={cabinet.id + "name"}
                            cursor={"pointer"}
                        >
                            {cabinet.name}
                        </text>
                        {isNumeric(cabinet.id) &&
                        <text
                            transform={"translate(" + (cabinet.point_x - 10) + " " + (+cabinet.point_y + 10) + ")"}
                            className={cabinet.id}
                            onClick={() => onClickCabinet(cabinet.id)}
                            key={cabinet.id + "id"}
                            cursor={"pointer"}
                        >
                            {cabinet.id}
                        </text>
                        }
                    </g>
                })}
            </g>
        </svg>
    }


};


export default FloorLayout;
