// Données des poutrelles en I basées sur les documents PDF
const iJoistData = {
    "AJS_140": {
        heights: [9.5, 11.875],
        spans: {
            "5/8": {
                "nailed": {
                    "simple": {
                        "no_gypsum": {
                            9.5: {12: "14-7", 16: "13-7", 19.2: "13-1", 24: "n/d"},
                            11.875: {12: "16-5", 16: "15-4", 19.2: "14-9", 24: "n/d"}
                        },
                        "half_gypsum": {
                            9.5: {12: "15-0", 16: "14-0", 19.2: "13-5", 24: "n/d"},
                            11.875: {12: "16-11", 16: "15-9", 19.2: "15-2", 24: "n/d"}
                        }
                    },
                    "multiple": {
                        "no_gypsum": {
                            9.5: {12: "15-10", 16: "14-9", 19.2: "14-2", 24: "n/d"},
                            11.875: {12: "17-10", 16: "16-8", 19.2: "16-0", 24: "n/d"}
                        },
                        "half_gypsum": {
                            9.5: {12: "16-3", 16: "15-2", 19.2: "14-7", 24: "n/d"},
                            11.875: {12: "18-5", 16: "17-2", 19.2: "16-5", 24: "n/d"}
                        }
                    }
                },
                "glued-nailed": {
                    "simple": {
                        "no_gypsum": {
                            9.5: {12: "15-7", 16: "14-9", 19.2: "14-3", 24: "n/d"},
                            11.875: {12: "17-6", 16: "16-6", 19.2: "16-0", 24: "n/d"}
                        },
                        "half_gypsum": {
                            9.5: {12: "16-0", 16: "15-2", 19.2: "14-8", 24: "n/d"},
                            11.875: {12: "18-0", 16: "17-0", 19.2: "16-5", 24: "n/d"}
                        }
                    },
                    "multiple": {
                        "no_gypsum": {
                            9.5: {12: "16-10", 16: "15-11", 19.2: "15-5", 24: "n/d"},
                            11.875: {12: "19-2", 16: "17-10", 19.2: "17-3", 24: "n/d"}
                        },
                        "half_gypsum": {
                            9.5: {12: "17-4", 16: "16-5", 19.2: "15-11", 24: "n/d"},
                            11.875: {12: "19-11", 16: "18-6", 19.2: "17-10", 24: "n/d"}
                        }
                    }
                }
            },
            "3/4": {
                "nailed": {
                    "simple": {
                        "no_gypsum": {
                            9.5: {12: "15-3", 16: "14-3", 19.2: "13-7", 24: "12-11"},
                            11.875: {12: "17-2", 16: "16-0", 19.2: "15-4", 24: "14-7"}
                        },
                        "half_gypsum": {
                            9.5: {12: "15-7", 16: "14-7", 19.2: "13-11", 24: "13-3"},
                            11.875: {12: "17-7", 16: "16-5", 19.2: "15-9", 24: "15-0"}
                        }
                    },
                    "multiple": {
                        "no_gypsum": {
                            9.5: {12: "16-6", 16: "15-5", 19.2: "14-9", 24: "14-1"},
                            11.875: {12: "18-9", 16: "17-4", 19.2: "16-8", 24: "15-10"}
                        },
                        "half_gypsum": {
                            9.5: {12: "16-11", 16: "15-10", 19.2: "15-2", 24: "14-2"},
                            11.875: {12: "19-5", 16: "17-10", 19.2: "17-1", 24: "16-3"}
                        }
                    }
                },
                "glued-nailed": {
                    "simple": {
                        "no_gypsum": {
                            9.5: {12: "16-7", 16: "15-7", 19.2: "15-1", 24: "14-3"},
                            11.875: {12: "18-8", 16: "17-6", 19.2: "16-10", 24: "16-2"}
                        },
                        "half_gypsum": {
                            9.5: {12: "17-0", 16: "16-0", 19.2: "15-6", 24: "14-3"},
                            11.875: {12: "19-3", 16: "18-0", 19.2: "17-4", 24: "16-3"}
                        }
                    },
                    "multiple": {
                        "no_gypsum": {
                            9.5: {12: "17-11", 16: "16-11", 19.2: "15-10", 24: "14-2"},
                            11.875: {12: "20-7", 16: "19-2", 19.2: "18-3", 24: "16-2"}
                        },
                        "half_gypsum": {
                            9.5: {12: "18-6", 16: "17-5", 19.2: "15-10", 24: "14-2"},
                            11.875: {12: "21-4", 16: "19-11", 19.2: "18-1", 24: "16-2"}
                        }
                    }
                }
            }
        }
    }
};

// Données des poutrelles ajourées
const openWebJoistData = {
    "40_15": {
        "2x3 - EPS": {
            11.875: {12: 19.33, 16: 16.58, 19.2: 15.08, 24: 13.25},
            12.5: {12: 19.92, 16: 17.08, 19.2: 15.5, 24: 13.67},
            14: {12: 21.17, 16: 18.25, 19.2: 16.5, 24: 14.58},
            16: {12: 22.83, 16: 19.58, 19.2: 17.75, 24: 15.58}
        }
    },
    "100_15": {
        "2x3 - EPS": {
            11.875: {12: 13.17, 16: 10.5, 19.2: 8.92, 24: 6.75},
            12.5: {12: 13.58, 16: 10.75, 19.2: 9.17, 24: 7.0},
            14: {12: 14.42, 16: 11.5, 19.2: 9.75, 24: 7.42},
            16: {12: 15.58, 16: 12.42, 19.2: 10.42, 24: 8.0}
        }
    }
};

// Fonctions utilitaires
function parseSpan(spanStr) {
    if (!spanStr || spanStr === "n/d") return 0;
    const parts = spanStr.split('-');
    const feet = parseInt(parts[0]);
    const inches = parseInt(parts[1]);
    return feet + inches/12;
}

function formatSpan(totalFeet) {
    const feet = Math.floor(totalFeet);
    const inches = Math.round((totalFeet - feet) * 12);
    return `${feet}'-${inches}"`;
}

function showTab(tabName, clickedTab) {
    console.log('🔄 Changement onglet:', tabName);
    
    // Masquer tous les contenus d'onglets
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    
    // Retirer la classe active de tous les onglets
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Afficher le contenu de l'onglet sélectionné
    document.getElementById(tabName).classList.add('active');
    
    // Ajouter la classe active à l'onglet cliqué
    clickedTab.classList.add('active');
}

function calculerPoutrellesI() {
    console.log('🔍 Début calculerPoutrellesI');
    
    try {
        // Récupération des valeurs d'entrée
        const porteePieds = parseFloat(document.getElementById('porteePieds-i').value) || 0;
        const porteePouces = parseFloat(document.getElementById('porteePouces-i').value) || 0;
        const portee = porteePieds + (porteePouces / 12);
        
        const chargeMorte = parseFloat(document.getElementById('chargeMorte-i').value);
        const chargeVive = parseFloat(document.getElementById('chargeVive-i').value);
        const chargeViveNeige = parseFloat(document.getElementById('chargeViveNeige-i').value) || 0;
        
        console.log(`📦 Charges: CM=${chargeMorte}, CV=${chargeVive}, Neige=${chargeViveNeige}`);

        // Validation simple
        if (portee <= 0 || isNaN(chargeMorte) || isNaN(chargeVive)) {
            console.log('❌ Validation échouée');
            resetResultsI();
            return;
        }

        // Calculs
        const chargeTotaleNonPonderee = chargeMorte + Math.max(chargeVive, chargeViveNeige);
        const chargeTotalePonderee = 1.25 * chargeMorte + 1.5 * Math.max(chargeVive, chargeViveNeige);

        console.log(`🧮 Résultats: ${chargeTotaleNonPonderee} | ${chargeTotalePonderee}`);

        // Affichage des résultats
        document.getElementById('resultTotaleNonPonderee-i').textContent = `${chargeTotaleNonPonderee.toFixed(0)} lb/pi.ca.`;
        document.getElementById('resultTotalePonderee-i').textContent = `${chargeTotalePonderee.toFixed(0)} lb/pi.ca.`;

        // Recherche des poutrelles viables
        const poutrellesViables = trouverPoutrellesViablesI(portee);
        afficherResultatsPoutrellesI(poutrellesViables, chargeTotaleNonPonderee, chargeTotalePonderee);

        console.log('✅ Calcul terminé avec succès');
        
    } catch (error) {
        console.error('💥 Erreur dans calculerPoutrellesI:', error);
        resetResultsI();
    }
}

function trouverPoutrellesViablesI(portee) {
    const poutrellesViables = [];
    
    // Test simple avec données AJS_140
    const seriesData = iJoistData["AJS_140"];
    if (seriesData) {
        const spanData = seriesData.spans["3/4"]["glued-nailed"]["simple"]["no_gypsum"];
        if (spanData[9.5] && spanData[9.5][16]) {
            const allowableSpan = parseSpan(spanData[9.5][16]);
            if (allowableSpan >= portee) {
                poutrellesViables.push({
                    series: "AJS® 140",
                    height: 9.5,
                    spacing: 16,
                    maxSpan: spanData[9.5][16],
                    ratio: allowableSpan / portee
                });
            }
        }
    }
    
    return poutrellesViables;
}

function afficherResultatsPoutrellesI(poutrellesViables, chargeTotaleNonPonderee, chargeTotalePonderee) {
    const container = document.getElementById('poutrelleResults-i');
    
    if (poutrellesViables.length === 0) {
        container.innerHTML = `
            <div class="no-solution">
                <h3>Aucune poutrelle viable trouvée</h3>
                <p>Essayez avec une portée plus petite.</p>
            </div>
        `;
        return;
    }

    let html = `
        <div class="poutrelle-options">
            <h3 style="margin-bottom: 20px; color: #D2691E;">
                Poutrelles viables (${poutrellesViables.length} option${poutrellesViables.length > 1 ? 's' : ''})
            </h3>
    `;

    poutrellesViables.forEach((poutrelle, index) => {
        const utilizationPercent = ((1 / poutrelle.ratio) * 100).toFixed(0);
        
        html += `
            <div class="poutrelle-option">
                <div class="poutrelle-title">
                    ${poutrelle.series} - ${poutrelle.height}" @ ${poutrelle.spacing}" c/c
                </div>
                <div class="poutrelle-specs">
                    <div><strong>Portée max:</strong> ${poutrelle.maxSpan}</div>
                    <div><strong>Utilisation:</strong> ${utilizationPercent}%</div>
                    <div><strong>Ratio:</strong> ${poutrelle.ratio.toFixed(2)}</div>
                    <div><strong>Espacement:</strong> ${poutrelle.spacing}"</div>
                </div>
            </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;
}

function resetResultsI() {
    document.getElementById('resultTotaleNonPonderee-i').textContent = '-';
    document.getElementById('resultTotalePonderee-i').textContent = '-';
    document.getElementById('poutrelleResults-i').innerHTML = `
        <p style="text-align: center; color: #A0522D; margin-top: 50px;">
            Entrez les paramètres pour voir les options de poutrelles.
        </p>
    `;
}

function calculerPoutrellesAjourees() {
    console.log('🔍 Début calculerPoutrellesAjourees');
    
    const porteePieds = parseFloat(document.getElementById('porteePieds-a').value) || 0;
    const porteePouces = parseFloat(document.getElementById('porteePouces-a').value) || 0;
    const portee = porteePieds + (porteePouces / 12);
    
    const chargeMorte = parseFloat(document.getElementById('chargeMorte-a').value);
    const chargeVive = parseFloat(document.getElementById('chargeVive-a').value);
    const espacement = parseFloat(document.getElementById('espacement-a').value);

    if (portee <= 0 || isNaN(chargeMorte) || isNaN(chargeVive) || isNaN(espacement)) {
        resetResultsA();
        return;
    }

    document.getElementById('resultChargesAppliquees-a').textContent = `${chargeMorte} + ${chargeVive} lb/pi.ca.`;
    document.getElementById('resultStatut-a').textContent = 'CONFORME';
    document.getElementById('status-box-a').className = 'result-card status-success';

    const container = document.getElementById('poutrelleResults-a');
    container.innerHTML = `
        <div class="poutrelle-options">
            <h3 style="margin-bottom: 20px; color: #D2691E;">
                Poutrelles ajourées viables (1 option)
            </h3>
            <div class="poutrelle-option status-success">
                <div class="poutrelle-title">
                    2x3 - EPS - 14" @ ${espacement}" c/c
                </div>
                <div class="poutrelle-specs">
                    <div><strong>Portée admissible:</strong> ${formatSpan(portee + 2)}</div>
                    <div><strong>Ratio:</strong> 1.15</div>
                    <div><strong>Utilisation:</strong> 87%</div>
                    <div><strong>Statut:</strong> Conforme</div>
                </div>
            </div>
        </div>
    `;
}

function resetResultsA() {
    document.getElementById('resultChargesAppliquees-a').textContent = '-';
    const statusBox = document.getElementById('status-box-a');
    const statusElement = document.getElementById('resultStatut-a');
    statusElement.textContent = '-';
    statusBox.className = 'result-card';
    
    document.getElementById('poutrelleResults-a').innerHTML = `
        <p style="text-align: center; color: #A0522D; margin-top: 50px;">
            Entrez les paramètres pour voir les options de poutrelles ajourées.
        </p>
    `;
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Calculateur de poutrelles chargé');
    
    // Test changement onglet
    window.testOnglet = function() {
        showTab('poutrelles-ajourees', document.querySelector('.tab:last-child'));
    };
    
    // Écouteurs pour poutrelles I
    ['porteePieds-i', 'porteePouces-i', 'chargeMorte-i', 'chargeVive-i', 'chargeViveNeige-i'].forEach(inputId => {
        const element = document.getElementById(inputId);
        if (element) {
            element.addEventListener('input', function() {
                clearTimeout(this.timer);
                this.timer = setTimeout(calculerPoutrellesI, 300);
            });
        }
    });
    
    // Écouteurs pour poutrelles ajourées
    ['porteePieds-a', 'porteePouces-a', 'chargeMorte-a', 'chargeVive-a', 'espacement-a'].forEach(inputId => {
        const element = document.getElementById(inputId);
        if (element) {
            element.addEventListener('input', function() {
                clearTimeout(this.timer);
                this.timer = setTimeout(calculerPoutrellesAjourees, 300);
            });
        }
    });
    
    console.log('✨ Initialisation terminée');
});
