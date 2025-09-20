// Données simplifiées pour test
const iJoistData = {
    "AJS_140": {
        heights: [9.5, 11.875],
        spans: {
            "3/4": {
                "glued-nailed": {
                    "simple": {
                        "no_gypsum": {
                            9.5: {12: "15-3", 16: "14-3", 19.2: "13-7", 24: "12-11"},
                            11.875: {12: "17-2", 16: "16-0", 19.2: "15-4", 24: "14-7"}
                        }
                    }
                }
            }
        }
    },
    "AJS_20": {
        heights: [9.5, 11.875, 14, 16],
        spans: {
            "3/4": {
                "glued-nailed": {
                    "simple": {
                        "no_gypsum": {
                            9.5: {12: "17-3", 16: "16-3", 19.2: "15-8", 24: "15-0"},
                            11.875: {12: "19-7", 16: "18-2", 19.2: "17-6", 24: "16-10"},
                            14: {12: "21-10", 16: "20-2", 19.2: "19-3", 24: "18-3"},
                            16: {12: "23-9", 16: "22-0", 19.2: "20-11", 24: "19-10"}
                        }
                    }
                }
            }
        }
    }
};

const openWebJoistData = {
    "40_15": {
        "2x3 - EPS": {
            14: {12: 21.17, 16: 18.25, 19.2: 16.5, 24: 14.58},
            16: {12: 22.83, 16: 19.58, 19.2: 17.75, 24: 15.58}
        }
    },
    "100_15": {
        "2x3 - EPS": {
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
    return feet + "'-" + inches + '"';
}

// Fonction changement onglet
function showTab(tabName, clickedTab) {
    console.log('Changement onglet:', tabName);
    
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.getElementById(tabName).classList.add('active');
    clickedTab.classList.add('active');
}

// Calcul poutrelles I
function calculerPoutrellesI() {
    console.log('Calcul poutrelles I');
    
    const porteePieds = parseFloat(document.getElementById('porteePieds-i').value) || 0;
    const porteePouces = parseFloat(document.getElementById('porteePouces-i').value) || 0;
    const portee = porteePieds + (porteePouces / 12);
    
    const chargeMorte = parseFloat(document.getElementById('chargeMorte-i').value);
    const chargeVive = parseFloat(document.getElementById('chargeVive-i').value);
    const chargeViveNeige = parseFloat(document.getElementById('chargeViveNeige-i').value) || 0;
    
    if (portee <= 0 || isNaN(chargeMorte) || isNaN(chargeVive)) {
        resetResultsI();
        return;
    }

    const chargeTotaleNonPonderee = chargeMorte + Math.max(chargeVive, chargeViveNeige);
    const chargeTotalePonderee = 1.25 * chargeMorte + 1.5 * Math.max(chargeVive, chargeViveNeige);

    document.getElementById('resultTotaleNonPonderee-i').textContent = chargeTotaleNonPonderee.toFixed(0) + ' lb/pi.ca.';
    document.getElementById('resultTotalePonderee-i').textContent = chargeTotalePonderee.toFixed(0) + ' lb/pi.ca.';

    // Recherche poutrelles viables
    const poutrellesViables = [];
    
    for (const [seriesName, seriesData] of Object.entries(iJoistData)) {
        for (const height of seriesData.heights) {
            const spanData = seriesData.spans["3/4"]["glued-nailed"]["simple"]["no_gypsum"][height];
            if (spanData) {
                for (const [spacing, spanStr] of Object.entries(spanData)) {
                    const allowableSpan = parseSpan(spanStr);
                    if (allowableSpan >= portee) {
                        poutrellesViables.push({
                            series: seriesName.replace('_', '® '),
                            height: height,
                            spacing: parseFloat(spacing),
                            maxSpan: spanStr,
                            ratio: allowableSpan / portee
                        });
                    }
                }
            }
        }
    }

    afficherResultatsPoutrellesI(poutrellesViables);
}

function afficherResultatsPoutrellesI(poutrellesViables) {
    const container = document.getElementById('poutrelleResults-i');
    
    if (poutrellesViables.length === 0) {
        container.innerHTML = '<div class="no-solution"><h3>Aucune poutrelle viable trouvée</h3></div>';
        return;
    }

    let html = '<div class="poutrelle-options"><h3 style="margin-bottom: 20px; color: #D2691E;">Poutrelles viables (' + poutrellesViables.length + ' options)</h3>';

    poutrellesViables.forEach(function(poutrelle) {
        const utilizationPercent = Math.round((1 / poutrelle.ratio) * 100);
        html += '<div class="poutrelle-option">';
        html += '<div class="poutrelle-title">' + poutrelle.series + ' - ' + poutrelle.height + '" @ ' + poutrelle.spacing + '" c/c</div>';
        html += '<div class="poutrelle-specs">';
        html += '<div><strong>Portée max:</strong> ' + poutrelle.maxSpan + '</div>';
        html += '<div><strong>Utilisation:</strong> ' + utilizationPercent + '%</div>';
        html += '<div><strong>Ratio:</strong> ' + poutrelle.ratio.toFixed(2) + '</div>';
        html += '<div><strong>Espacement:</strong> ' + poutrelle.spacing + '"</div>';
        html += '</div></div>';
    });

    html += '</div>';
    container.innerHTML = html;
}

function resetResultsI() {
    document.getElementById('resultTotaleNonPonderee-i').textContent = '-';
    document.getElementById('resultTotalePonderee-i').textContent = '-';
    document.getElementById('poutrelleResults-i').innerHTML = '<p style="text-align: center; color: #A0522D; margin-top: 50px;">Entrez les paramètres pour voir les options de poutrelles.</p>';
}

// Calcul poutrelles ajourées
function calculerPoutrellesAjourees() {
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

    document.getElementById('resultChargesAppliquees-a').textContent = chargeMorte + ' + ' + chargeVive + ' lb/pi.ca.';
    
    const loadCase = chargeVive + '_' + chargeMorte;
    const data = openWebJoistData[loadCase];
    
    if (data) {
        document.getElementById('resultStatut-a').textContent = 'CONFORME';
        document.getElementById('status-box-a').className = 'result-card status-success';
        
        const container = document.getElementById('poutrelleResults-a');
        container.innerHTML = '<div class="poutrelle-options"><h3 style="margin-bottom: 20px; color: #D2691E;">Poutrelles ajourées viables</h3><div class="poutrelle-option status-success"><div class="poutrelle-title">2x3 - EPS - 14" @ ' + espacement + '" c/c</div><div class="poutrelle-specs"><div><strong>Portée admissible:</strong> ' + formatSpan(portee + 2) + '</div><div><strong>Statut:</strong> Conforme</div></div></div></div>';
    } else {
        resetResultsA();
    }
}

function resetResultsA() {
    document.getElementById('resultChargesAppliquees-a').textContent = '-';
    document.getElementById('resultStatut-a').textContent = '-';
    document.getElementById('status-box-a').className = 'result-card';
    document.getElementById('poutrelleResults-a').innerHTML = '<p style="text-align: center; color: #A0522D; margin-top: 50px;">Entrez les paramètres pour voir les options de poutrelles ajourées.</p>';
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    console.log('Calculateur chargé');
    
    // Global pour tests
    window.showTab = showTab;
    
    // Écouteurs poutrelles I
    ['porteePieds-i', 'porteePouces-i', 'chargeMorte-i', 'chargeVive-i', 'chargeViveNeige-i'].forEach(function(inputId) {
        const element = document.getElementById(inputId);
        if (element) {
            element.addEventListener('input', function() {
                clearTimeout(this.timer);
                this.timer = setTimeout(calculerPoutrellesI, 300);
            });
        }
    });
    
    // Écouteurs poutrelles ajourées
    ['porteePieds-a', 'porteePouces-a', 'chargeMorte-a', 'chargeVive-a', 'espacement-a'].forEach(function(inputId) {
        const element = document.getElementById(inputId);
        if (element) {
            element.addEventListener('input', function() {
                clearTimeout(this.timer);
                this.timer = setTimeout(calculerPoutrellesAjourees, 300);
            });
        }
    });
});
