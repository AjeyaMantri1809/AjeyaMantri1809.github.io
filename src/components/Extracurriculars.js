import React from 'react';

export default function Extracurriculars(props) {

    if (props.data) {
        var message = props.data.message;
        var eca = props.data.eca.map(function (eca) {
            return <div key={eca.org}><h3>{eca.org}</h3>
            <p className="info">{eca.title}<span>&bull;</span> <em className="date">{eca.years}</em></p>
            <p><ul><li>{eca.description1}</li><li>{eca.description2}</li>
            </ul></p>
        </div>
        })
        var volunteering = props.data.volunteering.map(function (volunteering) {
            return <div key={volunteering.org}><h3>{volunteering.org}</h3>
                <p className="info">{volunteering.title}<span>&bull;</span> <em className="date">{volunteering.years}</em></p>
                <p><ul><li>{volunteering.description1}</li><li>{volunteering.description2}</li><li>{volunteering.description3}</li>
                </ul></p>
            </div>
        })
    }

    return (
        <section id="extracurriculars">
            <div className="row eca">
                <div className="three columns header-col">
                    <h1><span>Extracurriculars</span></h1>
                </div>

                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            {eca}
                        </div>
                    </div>
                </div>
            </div>


            <div className="row volunteering">
                <div className="three columns header-col">
                    <h1><span>Volunteering</span></h1>
                </div>
                <div className="nine columns main-col">
                    {volunteering}
                </div>
            </div>

        </section>
    );
}
