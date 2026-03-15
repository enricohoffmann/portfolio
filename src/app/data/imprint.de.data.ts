import { PageTextContent } from "../interfaces/pageTextContent.interface";

export const LegalNoticeDe: PageTextContent = {
        pageTitle: 'Impressum',
        sections: [
            {
                title: 'Impressum',
                paragraphs: [
                    { runs: [ 
                        { text: '', style: 'dot' }, { text: 'Enrico Hoffmann' }, {text: '', style: 'lineBreak'},
                        { text: '', style: 'dot' }, { text: 'Neckar-Alb-Str. 9/1' }, {text: '', style: 'lineBreak'},
                        { text: '', style: 'dot' }, { text: '72127 Kusterdingen' }
                    ]},
                ]
            },
            {
                title: 'Kontakt:',
                paragraphs: [{ runs: [{ text: 'Email: ' }, {text: 'enrico@enrico-hoffmann.de', style: 'link', link: {
                    linkTarget: 'mailto:enrico@enrico-hoffmann.de'
                }}] }]
            },
            {
                title: 'Geltung der Nutzungsbedingungen',
                paragraphs: [{
                    runs:[
                        { text: 'Durch den Zugriff auf dieses ' }, 
                        { text: 'Portfolio ', style: 'accent' },
                        { text: ` (Produkt), und dessen Nutzung erkennen Sie die folgenden Nutzungsbedingungen sowie alle 
                            gegebenenfalls von Zeit zu Zeit bereitgestellten Richtlinien, Änderungen oder Ergänzungen an und erklären sich damit einverstanden.
                            Wir, die genannten Studierenden, behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit ohne vorherige Ankündigung zu aktualisieren oder zu ändern.`
                        }
                    ]}]
            },
            {
                title: 'Umfang und Eigentum des Produkts',
                paragraphs: [
                    {
                        runs:[
                            {text: 'Das '},
                            {text: 'Portfolio ', style: 'accent'},
                            {text: 'wurde im Rahmen eines Gruppenprojekts während eines Webentwicklungs-Bootcamps bei der '},
                            {text: 'Developer Akademie GmbH', style: 'accent'},
                            {text: 'entwickelt. '},
                            {text: `Es dient ausschließlich Lern- und Demonstrationszwecken und ist nicht für eine umfangreiche persönliche oder geschäftliche Nutzung vorgesehen.
                                Daher können wir keine Gewähr für eine kontinuierliche Verfügbarkeit, Zuverlässigkeit, Genauigkeit oder andere Qualitätsmerkmale dieses Produkts übernehmen.`},

                        ]
                    },
                    {
                        runs: [
                            {text: 'Das Design des '},
                            {text: 'Portfolio ', style: 'accent'},
                            {text: 'ist Eigentum der '},
                            {text: 'Developer Akademie GmbH', style: 'accent'},
                            {text: '. '},
                            {text: 'Eine unbefugte Nutzung, Vervielfältigung, Änderung, Verbreitung oder sonstige Reproduktion des Designs ist ausdrücklich untersagt.'}
                        ]

                    }
                ]
            },
            {
                title: 'Urheber- und Eigentumsrechte',
                paragraphs: [
                    {
                        runs: [
                            {text: 'Abgesehen vom Design, das im Eigentum der '},
                            {text: 'Developer Akademie GmbH', style: 'accent'},
                            {text: ', '},
                            {text: 'steht, behalten wir, die genannten Studierenden, sämtliche Eigentums- und Nutzungsrechte am '},
                            {text: 'Portfolio', style: 'accent'},
                            {text: '. '},
                            {text: 'Dazu gehören insbesondere urheberrechtlich geschützte Inhalte, Marken sowie sonstige proprietäre Informationen.'}
                        ]
                    }
                ]
            },
            {
                title: 'Nutzung des Produkts',
                paragraphs: [
                    {
                        runs: [
                            {text: 'Das '},
                            {text: 'Portfolio ', style: 'accent'},
                            {text: `darf ausschließlich für rechtmäßige Zwecke und im Einklang mit allen geltenden Gesetzen und Vorschriften genutzt werden. Jegliche Nutzung des `},
                            {text: 'Portfolios', style: 'accent'},
                            {text: ` für illegale Aktivitäten oder zur Belästigung, Schädigung, Bedrohung oder Einschüchterung anderer Personen ist streng untersagt. 
                                Sie sind allein verantwortlich für Ihre Interaktionen mit anderen Nutzern dieses `},
                            {text: 'Portfolios', style: 'accent'},
                        ]
                    }
                ]
            },
            {
                title: 'Haftungsausschluss und Haftungsbeschränkung',
                paragraphs: [
                    {
                        runs: [
                            {text: 'Das '},
                            {text: 'Portfolio ', style: 'accent'},
                            {text: `wird „wie es ist“ („as is“) ohne jegliche Gewährleistung bereitgestellt, weder ausdrücklich noch stillschweigend.
                                Dies umfasst unter anderem keine Gewährleistung hinsichtlich: der Marktgängigkeit, der Marktgängigkeit, der Eignung für einen bestimmten Zweck.`},
                            {text: `In keinem Fall haften wir, die genannten Studierenden, oder die `},
                            {text: 'Developer Akademie', style: 'accent'},
                            {text: ', '},
                            {text: `für direkte oder indirekte Schäden, zufällige Schäden, besondere Schäden, Folgeschäden oder exemplarische Schäden. 
                                Dazu zählen unter anderem Schäden durch Verlust von: Gewinnen, Goodwill, Nutzung, Daten oder andere immaterielle Verluste. 
                                Dies gilt auch dann, wenn wir über die Möglichkeit solcher Schäden informiert wurden, die aus der Nutzung oder der Leistungsfähigkeit dieses `},
                            {text: 'Portfolios ', style: 'accent'},
                            {text: 'entstehen.'}
                        ]
                    }
                ]
            },
            {
                title: 'Freistellung',
                paragraphs: [
                    {
                        runs: [
                            {text: 'Sie erklären sich damit einverstanden, uns, die genannten Studierenden, die '},
                            {text: 'Developer Akademie', style: 'accent'},
                            {text: ', '},
                            {text: `sowie deren verbundene Unternehmen, Partner, Geschäftsführer, Mitarbeiter und Vertreter von sämtlichen Ansprüchen, Forderungen, Schäden, Kosten oder 
                                Haftungen (einschließlich angemessener Anwaltskosten) freizustellen und schadlos zu halten. Dies gilt für alle Ansprüche, die sich aus Ihrer Nutzung dieses `},
                            {text: 'Portfolios ', style: 'accent'},
                            {text: 'oder aus einem Verstoß gegen diese rechtlichen Hinweise ergeben.'}
                        ]
                    },
                    {
                        runs: [
                            {text: 'Bei Fragen oder rechtlichen Hinweisen kontaktieren Sie uns bitte unter: '},
                            {text: 'enrico@enrico-hoffmann.de', style: 'link', link: {
                                linkTarget: 'mailto:enrico@enrico-hoffmann.de'
                            }}
                        ]
                    },
                    {
                        runs: [
                            {text: 'Stand: 15. März 2026'}
                        ]
                    }
                ]
            }
        ]
    };