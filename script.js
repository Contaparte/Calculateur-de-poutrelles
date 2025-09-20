// Calculateur de Poutrelles Ajourées selon le guide CECOBOIS
// Basé sur l'analyse de treillis et les tableaux de dimensionnement

// Tables de rigidité EI et coefficients K (système impérial)
// Source: Tableau 6 du guide CECOBOIS - valeurs déjà en 10^6
const JOIST_PROPERTIES = {
    11.875: { // 11⅞"
        "2x3-EPS": { EI: 282, K: 4.75, VR: 2214 },
        "2x3-1650": { EI: 306, K: 4.75, VR: 2214 },
        "2x3-2100": { EI: 368, K: 4.75, VR: 2214 },
        "2x4-2100": { EI: 512, K: 4.75, VR: 2214 },
        "2x4-2400": { EI: 570, K: 4.75, VR: 2214 }
    },
    12.5: { // 12½"
        "2x3-EPS": { EI: 317, K: 5.07, VR: 2317 },
        "2x3-1650": { EI: 344, K: 5.07, VR: 2317 },
        "2x3-2100": { EI: 414, K: 5.07, VR: 2317 },
        "2x4-2100": { EI: 576, K: 5.07, VR: 2317 },
        "2x4-2400": { EI: 641, K: 5.07, VR: 2317 }
    },
    14: {
        "2x3-EPS": { EI: 409, K: 6.57, VR: 2567 },
        "2x3-1650": { EI: 443, K: 6.57, VR: 2567 },
        "2x3-2100": { EI: 533, K: 6.57, VR: 2567 },
        "2x4-2100": { EI: 742, K: 6.57, VR: 2567 },
        "2x4-2400": { EI: 826, K: 6.57, VR: 2567 }
    },
    16: {
        "2x3-EPS": { EI: 547, K: 8.08, VR: 2895 },
        "2x3-1650": { EI: 593, K: 8.08, VR: 2895 },
        "2x3-2100": { EI: 713, K: 8.08, VR: 2895 },
        "2x4-2100": { EI: 993, K: 8.08, VR: 2895 },
        "2x4-2400": { EI: 1104, K: 8.08, VR: 2895 }
    },
    18: {
        "2x4-2100": { EI: 1286, K: 9.53, VR: 3228 },
        "2x4-2400": { EI: 1431, K: 9.53, VR: 3228 }
    },
    20: {
        "2x4-2100": { EI: 1617, K: 11.10, VR: 3560 },
        "2x4-2400": { EI: 1800, K: 11.10, VR: 3560 }
    },
    22: {
        "2x4-2100": { EI: 1986, K: 13.27, VR: 3938 },
        "2x4-2400": { EI: 2211, K: 13.27, VR: 3938 }
    },
    24: {
        "2x4-2100": { EI: 2394, K: 14.46, VR: 4120 },
        "2x4-2400": { EI: 2664, K: 14.46, VR: 4120 }
    }
};

// Tables de portées admissibles pour charges résidentielles (40 psf + 15 psf)
// Source: Tableaux 12-15 du guide CECOBOIS (extraits corrigés)
const ALLOWABLE_SPANS = {
    11.875: {
        "2x3-EPS": { 12: 19.4, 16: 16.7, 19.2: 15.1, 24: 13.3 },
        "2x3-1650": { 12: 21.6, 16: 19.7, 19.2: 17.9, 24: 15.7 },
        "2x3-2100": { 12: 22.4, 16: 20.9, 19.2: 19.9, 24: 18.4 },
        "2x4-2100": { 12: 24.1, 16: 22.5, 19.2: 21.4, 24: 20.2 },
        "2x4-2400": { 12: 24.7, 16: 23.1, 19.2: 22.0, 24: 20.7 }
    },
    12.5: {
        "2x3-EPS": { 12: 19.9, 16: 17.1, 19.2: 15.5, 24: 13.7 },
        "2x3-1650": { 12: 22.2, 16: 20.3, 19.2: 18.4, 24: 16.2 },
        "2x3-2100": { 12: 23.1, 16: 21.6, 19.2: 20.6, 24: 19.1 },
        "2x4-2100": { 12: 24.9, 16: 23.2, 19.2: 22.1, 24: 20.8 },
        "2x4-2400": { 12: 25.5, 16: 23.8, 19.2: 22.7, 24: 21.3 }
    },
    14: {
        "2x3-EPS": { 12: 21.3, 16: 18.3, 19.2: 16.6, 24: 14.6 },
        "2x3-1650": { 12: 23.9, 16: 21.6, 19.2: 19.6, 24: 17.3 },
        "2x3-2100": { 12: 24.8, 16: 23.2, 19.2: 22.1, 24: 20.8 },
        "2x4-2100": { 12: 26.7, 16: 24.9, 19.2: 23.8, 24: 22.4 },
        "2x4-2400": { 12: 27.3, 16: 25.5, 19.2: 24.4, 24: 22.9 }
    },
    16: {
        "2x3-EPS": { 12: 22.9, 16: 19.6, 19.2: 17.8, 24: 15.7 },
        "2x3-1650": { 12: 25.9, 16: 23.2, 19.2: 21.1, 24: 18.6 },
        "2x3-2100": { 12: 26.9, 16: 25.2, 19.2: 24.0, 24: 22.6 },
        "2x4-2100": { 12: 29.0, 16: 27.1, 19.2: 25.8, 24: 24.3 },
        "2x4-2400": { 12: 29.7, 16: 27.8, 19.2: 26.5, 24: 25.0 }
    },
    18: {
        "2x4-2100": { 12: 31.0, 16: 29.0, 19.2: 27.6, 24: 26.0 },
        "2x4-2400": { 12: 31.8, 16: 29.8, 19.2: 28.4, 24: 26.8 }
    },
    20: {
        "2x4-2100": { 12: 32.6, 16: 30.6, 19.2: 29.1, 24: 27.5 },
        "2x4-2400": { 12: 33.5, 16: 31.5, 19.2: 30.0, 24: 28.4 }
    },
    22: {
        "2x4-2100": { 12: 35.1, 16: 32.3, 19.2: 30.1, 24: 29.1 },
        "2x4-2400": { 12: 36.0, 16: 33.2, 19.2: 31.1, 24: 30.0 }
    },
    24: {
        "2x4-2100": { 12: 37.6, 16: 34.6, 19.2: 32.6, 24: 30.9 },
        "2x4-2400": { 12: 38.5, 16: 35.6, 19.2: 33.6, 24: 31.9 }
    }
};

// Ouvertures maximales selon les tableaux CECOBOIS (en pouces)
const MAX_OPENINGS = {
    11.875: { "2x3": { A: 5.9, B: 5.1, C: 2.8, D: 2.6, E: 6.7 }, "2x4": { A: 6.2, B: 5.5, C: 3.9, D: 3.7, E: 8.9 } },
    12.5: { "2x3": { A: 6.0, B: 5.2, C: 2.8, D: 2.6, E: 6.7 }, "2x4": { A: 6.3, B: 5.6, C: 3.9, D: 3.7, E: 8.9 } },
    14: { "2x3": { A: 6.4, B: 5.6, C: 2.8, D: 2.6, E: 6.7 }, "2x4": { A: 6.8, B: 6.1, C: 3.9, D: 3.7, E: 8.9 } },
    16: { "2x3": { A: 7.0, B: 6.1, C: 2.8, D: 2.6, E: 6.7 }, "2x4": { A: 7.4, B: 6.6, C: 3.9, D: 3.7, E: 8.9 } },
    18: { "2x4": { A: 7.8, B: 7.0, C: 3.9, D: 3.7, E: 8.9 } },
    20: { "2x4": { A: 8.3, B: 7.4, C: 3.9, D: 3.7, E: 8.9 } },
    22: { "2x4": { A: 8.7, B: 7.8, C: 3.9, D: 3.7, E: 8.9 } },
    24: { "2x4": { A: 9.3, B: 8.3, C: 3.9, D: 3.7, E: 8.9 } }
};

function calculateJoist() {
    try {
        // Récupération des paramètres d'entrée
        const span = parseFloat(document.getElementById('span').value); // en pieds
        const spacing = parseFloat(document.getElementById('spacing').value); // en pouces
        const height = parseFloat(document.getElementById('height').value); // en pouces
        const series = document.getElementById('series').value;
        const spanType = document.getElementById('spanType').value;
        const deadLoad = parseFloat(document.getElementById('deadLoad').value); // psf
        const liveLoad = parseFloat(document.getElementById('liveLoad').value); // psf
        const snowLoad = parseFloat(document.getElementById('snowLoad').value); // psf

        // Validation des paramètres
        if (!span || !spacing || !height || !series) {
            showError("Veuillez remplir tous les paramètres requis.");
            return;
        }

        // Validation de la disponibilité des données
        if (!JOIST_PROPERTIES[height] || !JOIST_PROPERTIES[height][series]) {
            showError("Combinaison hauteur/série non disponible dans les tables CECOBOIS.");
            return;
        }

        // Analyser toutes les options disponibles
        const recommendations = analyzeAllOptions(span, spacing, deadLoad, liveLoad, snowLoad);
        
        // Calculer pour la configuration sélectionnée
        const results = performCalculations(span, spacing, height, series, spanType, deadLoad, liveLoad, snowLoad);
        
        // Afficher les résultats avec recommandations
        displayResults(results, recommendations);

    } catch (error) {
        showError("Erreur lors du calcul: " + error.message);
    }
}

function analyzeAllOptions(span, spacing, deadLoad, liveLoad, snowLoad) {
    const totalLiveLoad = Math.max(liveLoad, snowLoad);
    const totalLoad = deadLoad + totalLiveLoad;
    const standardTotal = 55; // 40 + 15 lb/pi²
    const adjustmentFactor = Math.sqrt(standardTotal / totalLoad);
    
    const recommendations = [];

    for (const [heightStr, heightData] of Object.entries(ALLOWABLE_SPANS)) {
        const height = parseFloat(heightStr);
        for (const [series, spacingData] of Object.entries(heightData)) {
            if (spacingData[spacing]) {
                const baseAllowableSpan = spacingData[spacing];
                const adjustedSpan = baseAllowableSpan * adjustmentFactor;
                
                if (adjustedSpan >= span) {
                    const properties = JOIST_PROPERTIES[height][series];
                    recommendations.push({
                        height: height,
                        series: series,
                        allowableSpan: adjustedSpan,
                        baseSpan: baseAllowableSpan,
                        margin: adjustedSpan - span,
                        EI: properties.EI,
                        adequate: true
                    });
                }
            }
        }
    }

    // Trier par marge croissante (plus optimal = marge plus petite)
    recommendations.sort((a, b) => a.margin - b.margin);
    
    return recommendations;
}

function performCalculations(span, spacing, height, series, spanType, deadLoad, liveLoad, snowLoad) {
    const spanInches = span * 12; // conversion en pouces
    const totalLiveLoad = Math.max(liveLoad, snowLoad); // charge vive gouvernante
    const totalLoad = deadLoad + totalLiveLoad;
    
    // Propriétés de la poutrelle - valeurs déjà en 10^6
    const props = JOIST_PROPERTIES[height][series];
    const EI = props.EI * 1000000; // 10^6 lb·in² * 10^6 = lb·in²
    const K = props.K * 1000000; // 10^6 lb * 10^6 = lb
    const VR = props.VR; // résistance au cisaillement en lb

    // Charge uniformément répartie (lb/in)
    const wTotal = (totalLoad * spacing) / 12; // lb/in
    const wLive = (totalLiveLoad * spacing) / 12; // lb/in

    // Moments et cisaillements
    const MTotal = (wTotal * Math.pow(spanInches, 2)) / 8; // moment total (lb·in)
    const MLive = (wLive * Math.pow(spanInches, 2)) / 8; // moment charge vive (lb·in)
    const VMax = (wTotal * spanInches) / 2; // cisaillement max (lb)

    // Calcul des flèches selon les équations CECOBOIS
    const deflectionTotal = calculateDeflection(wTotal, spanInches, EI, K);
    const deflectionLive = calculateDeflection(wLive, spanInches, EI, K);

    // Limites de flèche selon CNBC
    const deflectionLimitLive = spanInches / 360; // L/360 pour charge vive
    const deflectionLimitTotal = spanInches / 240; // L/240 pour charge totale

    // Vérification de la portée admissible
    const allowableSpan = checkAllowableSpan(height, series, spacing, totalLiveLoad, deadLoad);
    
    // Vérification des vibrations selon CCMC
    const vibrationCheck = checkVibrations(span, spacing, height, series);

    // Ouvertures maximales
    const openings = getMaxOpenings(height, series);

    return {
        span: span,
        spacing: spacing,
        height: height,
        series: series,
        totalLoad: totalLoad,
        deadLoad: deadLoad,
        liveLoad: totalLiveLoad,
        deflectionTotal: deflectionTotal,
        deflectionLive: deflectionLive,
        deflectionLimitLive: deflectionLimitLive,
        deflectionLimitTotal: deflectionLimitTotal,
        allowableSpan: allowableSpan,
        vibrationCheck: vibrationCheck,
        shearCheck: VMax <= VR,
        shearUtilization: (VMax / VR * 100),
        openings: openings,
        EI: props.EI, // garder en 10^6
        K: props.K, // garder en 10^6
        moment: MTotal,
        shear: VMax
    };
}

function calculateDeflection(w, L, EI, K) {
    // Équation (6) du guide CECOBOIS pour charge uniforme
    // Δ = (5wL⁴)/(384EI) + (wL²)/K
    const flexuralDeflection = (5 * w * Math.pow(L, 4)) / (384 * EI);
    const shearDeflection = (w * Math.pow(L, 2)) / K;
    return flexuralDeflection + shearDeflection;
}

function checkAllowableSpan(height, series, spacing, liveLoad, deadLoad) {
    // Vérification basée sur les tableaux de portées admissibles
    if (!ALLOWABLE_SPANS[height] || !ALLOWABLE_SPANS[height][series]) {
        return null;
    }
    
    const baseAllowableSpan = ALLOWABLE_SPANS[height][series][spacing];
    
    // Ajustement pour charges différentes de 40 psf + 15 psf
    const standardTotal = 55; // 40 + 15
    const actualTotal = liveLoad + deadLoad;
    const adjustmentFactor = Math.sqrt(standardTotal / actualTotal);
    
    return baseAllowableSpan * adjustmentFactor;
}

function checkVibrations(span, spacing, height, series) {
    // Critères de vibration CCMC selon la figure 27 du guide
    const spanMeters = span * 0.3048; // conversion en mètres
    let limit;
    
    if (spanMeters < 3) {
        limit = 2.0; // mm
    } else if (spanMeters <= 5.5) {
        limit = spanMeters * 1000 / 450; // L/450 en mm
    } else if (spanMeters <= 9.9) {
        limit = 8 / Math.pow(spanMeters, 1.3); // mm
    } else {
        limit = 2.55 / Math.pow(spanMeters, 0.63); // mm
    }

    // Calcul de la flèche sous charge ponctuelle de 1 kN (225 lb)
    const P = 225; // lb
    const spanInches = span * 12;
    const props = JOIST_PROPERTIES[height][series];
    const EI = props.EI * 1000000; // conversion correcte
    const K = props.K * 1000000; // conversion correcte
    
    // Équation (7) pour charge concentrée
    const deflectionPoint = (P * Math.pow(spanInches, 3)) / (48 * EI) + (2 * P * spanInches) / K;
    const deflectionPointMm = deflectionPoint * 25.4; // conversion en mm

    return {
        limit: limit,
        actual: deflectionPointMm,
        passes: deflectionPointMm <= limit
    };
}

function getMaxOpenings(height, series) {
    const chordSize = series.startsWith("2x3") ? "2x3" : "2x4";
    if (!MAX_OPENINGS[height] || !MAX_OPENINGS[height][chordSize]) {
        return null;
    }
    return MAX_OPENINGS[height][chordSize];
}

function displayResults(results, recommendations) {
    const container = document.getElementById('results-container');
    
    // Détermination du statut global
    const deflectionOK = results.deflectionLive <= results.deflectionLimitLive && 
                        results.deflectionTotal <= results.deflectionLimitTotal;
    const spanOK = results.allowableSpan ? results.span <= results.allowableSpan : true;
    const vibrationOK = results.vibrationCheck.passes;
    const shearOK = results.shearCheck;
    
    const overallStatus = deflectionOK && spanOK && vibrationOK && shearOK;
    
    let statusClass = 'summary-box';
    let statusText = '✓ CONFORME';
    let statusDescription = 'Configuration sélectionnée valide';

    if (!overallStatus) {
        statusClass = 'summary-box error';
        statusText = '✗ NON CONFORME';
        statusDescription = 'Configuration sélectionnée inadéquate';
    } else if (recommendations.length > 3) {
        statusClass = 'summary-box success';
        statusText = '✓ OPTIMAL';
        statusDescription = 'Plusieurs options disponibles';
    } else if (recommendations.length <= 2) {
        statusClass = 'summary-box warning';
        statusText = '⚠ LIMITÉ';
        statusDescription = 'Peu d\'options disponibles';
    }

    let html = `
        <div class="${statusClass}">
            <div class="summary-value">${statusText}</div>
            <div class="summary-label">${statusDescription}</div>
        </div>

        <div class="results">
            <h3>Configuration sélectionnée</h3>
            
            <div class="result-item">
                <span class="result-label">Poutrelle</span>
                <span class="result-value">${results.height}" ${results.series}</span>
            </div>
            
            <div class="result-item">
                <span class="result-label">Espacement</span>
                <span class="result-value">${results.spacing}" c/c</span>
            </div>
            
            <div class="result-item">
                <span class="result-label">Portée demandée</span>
                <span class="result-value">${results.span}' (${(results.span * 12).toFixed(1)}")</span>
            </div>
            
            <div class="result-item">
                <span class="result-label">Charges</span>
                <span class="result-value">CM: ${results.deadLoad} psf, CV: ${results.liveLoad} psf</span>
            </div>
        </div>

        <div class="verification-section">
            <h3>Vérifications structurales</h3>
            
            <div class="verification-item">
                <span>Portée admissible</span>
                <div>
                    ${results.allowableSpan ? 
                        `<span class="result-value">${results.allowableSpan.toFixed(1)}'</span>
                         <span class="status-badge ${spanOK ? 'badge-ok' : 'badge-error'}">${spanOK ? 'OK' : 'ÉCHEC'}</span>` :
                        '<span class="status-badge badge-warning">N/D</span>'
                    }
                </div>
            </div>
            
            <div class="verification-item">
                <span>Flèche charge vive (L/360)</span>
                <div>
                    <span class="result-value">${(results.deflectionLive).toFixed(3)}" ≤ ${(results.deflectionLimitLive).toFixed(3)}"</span>
                    <span class="status-badge ${results.deflectionLive <= results.deflectionLimitLive ? 'badge-ok' : 'badge-error'}">
                        ${results.deflectionLive <= results.deflectionLimitLive ? 'OK' : 'ÉCHEC'}
                    </span>
                </div>
            </div>
            
            <div class="verification-item">
                <span>Flèche totale (L/240)</span>
                <div>
                    <span class="result-value">${(results.deflectionTotal).toFixed(3)}" ≤ ${(results.deflectionLimitTotal).toFixed(3)}"</span>
                    <span class="status-badge ${results.deflectionTotal <= results.deflectionLimitTotal ? 'badge-ok' : 'badge-error'}">
                        ${results.deflectionTotal <= results.deflectionLimitTotal ? 'OK' : 'ÉCHEC'}
                    </span>
                </div>
            </div>
            
            <div class="verification-item">
                <span>Vibrations CCMC</span>
                <div>
                    <span class="result-value">${results.vibrationCheck.actual.toFixed(2)} ≤ ${results.vibrationCheck.limit.toFixed(2)} mm</span>
                    <span class="status-badge ${vibrationOK ? 'badge-ok' : 'badge-error'}">
                        ${vibrationOK ? 'OK' : 'ÉCHEC'}
                    </span>
                </div>
            </div>
            
            <div class="verification-item">
                <span>Cisaillement</span>
                <div>
                    <span class="result-value">Utilisation: ${results.shearUtilization.toFixed(1)}%</span>
                    <span class="status-badge ${shearOK ? 'badge-ok' : 'badge-error'}">
                        ${shearOK ? 'OK' : 'ÉCHEC'}
                    </span>
                </div>
            </div>
        </div>
    `;

    // Afficher les recommandations alternatives
    if (recommendations.length > 0) {
        html += `
            <div class="recommendations">
                <h3 style="color: #27ae60; margin-bottom: 15px;">Solutions recommandées</h3>
        `;

        recommendations.slice(0, 5).forEach((rec, index) => {
            const isSelected = rec.height === results.height && rec.series === results.series;
            const cardClass = isSelected ? 'optimal' : (index === 0 ? 'optimal' : '');
            const heightLabel = rec.height === 11.875 ? '11⅞"' : rec.height === 12.5 ? '12½"' : `${rec.height}"`;
            
            html += `
                <div class="recommendation-card ${cardClass}">
                    <h4>${rec.series} - Hauteur ${heightLabel}${isSelected ? ' (SÉLECTIONNÉ)' : (index === 0 && !isSelected ? ' (OPTIMAL)' : '')}</h4>
                    <div class="recommendation-specs">
                        <div class="spec-item">
                            <span class="spec-label">Portée admissible:</span>
                            <span class="spec-value">${rec.allowableSpan.toFixed(1)}'</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Marge de sécurité:</span>
                            <span class="spec-value">${rec.margin.toFixed(1)}'</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Rigidité EI:</span>
                            <span class="spec-value">${rec.EI} × 10⁶</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">Portée base:</span>
                            <span class="spec-value">${rec.baseSpan.toFixed(1)}'</span>
                        </div>
                    </div>
                    <div class="portee-result">
                        ✓ Convient pour ${results.span}' @ ${results.spacing}" c/c
                    </div>
                </div>
            `;
        });

        html += `</div>`;
    }

    // Ouvertures maximales
    if (results.openings) {
        html += `
            <div class="verification-section">
                <h3>Ouvertures maximales permises</h3>
                <div class="verification-item">
                    <span>Zone A (extrémités)</span>
                    <span class="result-value">${results.openings.A}"</span>
                </div>
                <div class="verification-item">
                    <span>Zone B (quart de portée)</span>
                    <span class="result-value">${results.openings.B}"</span>
                </div>
                <div class="verification-item">
                    <span>Zone C (centre)</span>
                    <span class="result-value">${results.openings.C}"</span>
                </div>
                <div class="verification-item">
                    <span>Diamètre max (zones D et E)</span>
                    <span class="result-value">D: ${results.openings.D}", E: ${results.openings.E}"</span>
                </div>
            </div>
        `;
    }

    html += `
        <div class="info-box">
            <h4>Notes importantes</h4>
            <ul style="margin-left: 20px; margin-top: 10px;">
                <li>Calculs basés sur les tableaux et formules du guide CECOBOIS</li>
                <li>Analyse par méthode de treillis avec états limites selon CNBC</li>
                <li>Vérifications : résistance, flèche et vibrations selon CSA O86</li>
                <li>Les ouvertures doivent respecter les limites par zone</li>
                <li>Consulter un ingénieur pour validation finale</li>
            </ul>
        </div>
    `;

    container.innerHTML = html;
}

function showError(message) {
    const container = document.getElementById('results-container');
    container.innerHTML = `
        <div class="error-message">
            <strong>Erreur:</strong> ${message}
        </div>
    `;
}

// Calcul automatique lors des changements de paramètres
document.addEventListener('DOMContentLoaded', function() {
    // Ajouter des événements de changement pour recalcul automatique
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('change', function() {
            // Calculer automatiquement après un délai pour éviter les calculs répétitifs
            clearTimeout(this.autoCalcTimeout);
            this.autoCalcTimeout = setTimeout(() => {
                if (document.getElementById('span').value && 
                    document.getElementById('spacing').value && 
                    document.getElementById('height').value && 
                    document.getElementById('series').value) {
                    calculateJoist();
                }
            }, 500);
        });
    });
});
