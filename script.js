// Tables des portées admissibles des poutrelles ajourées (CECOBOIS)
// Adaptées pour le système impérial et charges résidentielles

// Conversion des tables métriques vers impérial pour charges résidentielles
// Charge 40 lb/pi² (surcharge) + 15 lb/pi² (permanente)
const POUTRELLES_RESIDENTIAL = {
    302: { // hauteur 11⅞" (302mm)
        "2x3-EPS": { 12: 19.4, 16: 16.7, 19.2: 15.1, 24: 13.3 },
        "2x3-1650": { 12: 21.6, 16: 19.7, 19.2: 17.9, 24: 15.7 },
        "2x3-2100": { 12: 22.4, 16: 20.9, 19.2: 19.9, 24: 18.4 },
        "2x4-2100": { 12: 24.1, 16: 22.5, 19.2: 21.4, 24: 20.2 },
        "2x4-2400": { 12: 24.7, 16: 23.1, 19.2: 22.0, 24: 20.7 }
    },
    318: { // hauteur 12½" (318mm)
        "2x3-EPS": { 12: 19.9, 16: 17.1, 19.2: 15.5, 24: 13.7 },
        "2x3-1650": { 12: 22.2, 16: 20.3, 19.2: 18.4, 24: 16.2 },
        "2x3-2100": { 12: 23.1, 16: 21.6, 19.2: 20.6, 24: 19.1 },
        "2x4-2100": { 12: 24.9, 16: 23.2, 19.2: 22.1, 24: 20.8 },
        "2x4-2400": { 12: 25.5, 16: 23.8, 19.2: 22.7, 24: 21.3 }
    },
    356: { // hauteur 14" (356mm)
        "2x3-EPS": { 12: 21.3, 16: 18.3, 19.2: 16.6, 24: 14.6 },
        "2x3-1650": { 12: 23.9, 16: 21.6, 19.2: 19.6, 24: 17.3 },
        "2x3-2100": { 12: 24.8, 16: 23.2, 19.2: 22.1, 24: 20.8 },
        "2x4-2100": { 12: 26.7, 16: 24.9, 19.2: 23.8, 24: 22.4 },
        "2x4-2400": { 12: 27.3, 16: 25.5, 19.2: 24.4, 24: 22.9 }
    },
    406: { // hauteur 16" (406mm)
        "2x3-EPS": { 12: 22.9, 16: 19.6, 19.2: 17.8, 24: 15.7 },
        "2x3-1650": { 12: 25.9, 16: 23.2, 19.2: 21.1, 24: 18.6 },
        "2x3-2100": { 12: 26.9, 16: 25.2, 19.2: 24.1, 24: 22.6 },
        "2x4-2100": { 12: 28.9, 16: 27.0, 19.2: 25.7, 24: 24.3 },
        "2x4-2400": { 12: 29.5, 16: 27.6, 19.2: 26.4, 24: 24.9 }
    },
    457: { // hauteur 18" (457mm)
        "2x4-2100": { 12: 31.0, 16: 29.0, 19.2: 27.7, 24: 26.1 },
        "2x4-2400": { 12: 31.7, 16: 29.7, 19.2: 28.4, 24: 26.7 }
    },
    508: { // hauteur 20" (508mm)
        "2x4-2100": { 12: 32.6, 16: 30.5, 19.2: 29.1, 24: 27.5 },
        "2x4-2400": { 12: 34.1, 16: 31.7, 19.2: 30.3, 24: 28.5 }
    },
    559: { // hauteur 22" (559mm)
        "2x4-2100": { 12: 35.1, 16: 32.3, 19.2: 30.9, 24: 29.1 },
        "2x4-2400": { 12: 36.7, 16: 33.7, 19.2: 32.0, 24: 30.2 }
    },
    610: { // hauteur 24" (610mm)
        "2x4-2100": { 12: 37.5, 16: 34.5, 19.2: 32.6, 24: 30.8 },
        "2x4-2400": { 12: 39.2, 16: 36.1, 19.2: 34.1, 24: 31.8 }
    }
};

// Hauteurs disponibles avec équivalents
const HAUTEURS_DISPONIBLES = [
    { mm: 302, pouces: 11.875, display: "11⅞\"" },
    { mm: 318, pouces: 12.5, display: "12½\"" },
    { mm: 356, pouces: 14, display: "14\"" },
    { mm: 406, pouces: 16, display: "16\"" },
    { mm: 457, pouces: 18, display: "18\"" },
    { mm: 508, pouces: 20, display: "20\"" },
    { mm: 559, pouces: 22, display: "22\"" },
    { mm: 610, pouces: 24, display: "24\"" }
];

// Espacements standards en pouces
const ESPACEMENTS_STANDARDS = [12, 16, 19.2, 24];

function appliquerPreset(type) {
    if (type === 'residentiel') {
        document.getElementById('chargeVive').value = '40';
        document.getElementById('chargeMorte').value = '15';
    }
    calculerPoutrelles();
}

function calculerPoutrelles() {
    // Récupération des valeurs d'entrée
    const porteePieds = parseFloat(document.getElementById('porteePieds').value) || 0;
    const porteePouces = parseFloat(document.getElementById('porteePouces').value) || 0;
    const porteeTotal = porteePieds + (porteePouces / 12); // Conversion en pieds
    
    const espacementMm = parseInt(document.getElementById('espacement').value);
    const chargeVive = parseFloat(document.getElementById('chargeVive').value) || 0;
    const chargeMorte = parseFloat(document.getElementById('chargeMorte').value) || 0;
    const hauteurMaxPouces = parseFloat(document.getElementById('hauteurMax').value) || null;
    const optimisation = document.getElementById('optimisation').value;
    
    const typePlancher = document.getElementById('typePlancher').value;
    const typePortee = document.getElementById('typePortee').value;
    const epaisseurSousPlancher = document.getElementById('epaisseurSousPlancher').value;
    const fixation = document.getElementById('fixation').value;
    const plafondGypse = document.getElementById('plafondGypse').checked;

    // Validation des entrées essentielles
    if (!porteeTotal || porteeTotal < 10 || porteeTotal > 40) {
        afficherMessageErreur("La portée doit être entre 10 et 40 pieds");
        return;
    }

    if (!espacementMm) {
        afficherMessageErreur("Sélectionnez un espacement");
        return;
    }

    if (!chargeVive || !chargeMorte) {
        afficherMessageErreur("Entrez les charges");
        return;
    }

    // Conversion espacement mm vers pouces
    const espacementPouces = espacementMm === 305 ? 12 : 
                            espacementMm === 406 ? 16 : 
                            espacementMm === 488 ? 19.2 : 24;

    // Affichage des résultats de calcul
    const chargesTotales = chargeVive + chargeMorte;
    const porteeDisplay = porteePouces > 0 ? `${porteePieds}'-${porteePouces}"` : `${porteePieds}'-0"`;
    
    document.getElementById('resultPortee').textContent = porteeDisplay;
    document.getElementById('resultCharges').textContent = `${chargesTotales} lb/pi²`;
    document.getElementById('resultEspacement').textContent = `${espacementPouces}"`;
    
    const configElements = [];
    if (epaisseurSousPlancher) configElements.push(`${epaisseurSousPlancher === '16' ? '5/8"' : '3/4"'} sous-plancher`);
    if (fixation) configElements.push(fixation === 'cloue_colle' ? 'cloué-collé' : 'cloué');
    if (plafondGypse) configElements.push('gypse 1/2"');
    
    document.getElementById('resultConfig').textContent = configElements.length > 0 ? configElements.join(', ') : '-';

    // Vérification des charges standard résidentielles
    if (Math.abs(chargeVive - 40) < 0.1 && Math.abs(chargeMorte - 15) < 0.1) {
        // Recherche des poutrelles viables
        const poutrellesViables = trouverPoutrellesViables(
            porteeTotal, 
            espacementPouces, 
            hauteurMaxPouces, 
            optimisation
        );
        
        afficherResultatsPoutrelles(poutrellesViables);
    } else {
        afficherMessageErreur("Ce calculateur est optimisé pour les charges résidentielles standard (40 + 15 lb/pi²)");
    }
}

function trouverPoutrellesViables(porteeTotal, espacementPouces, hauteurMaxPouces, optimisation) {
    const poutrellesViables = [];
    
    // Parcourir toutes les hauteurs disponibles
    for (const hauteurInfo of HAUTEURS_DISPONIBLES) {
        const hauteurMm = hauteurInfo.mm;
        const hauteurPouces = hauteurInfo.pouces;
        
        // Vérifier contrainte de hauteur
        if (hauteurMaxPouces && hauteurPouces > hauteurMaxPouces) {
            continue;
        }
        
        if (!POUTRELLES_RESIDENTIAL[hauteurMm]) continue;
        
        const donnees = POUTRELLES_RESIDENTIAL[hauteurMm];
        
        // Parcourir toutes les séries pour cette hauteur
        for (const [serie, espacements] of Object.entries(donnees)) {
            if (espacements[espacementPouces] && espacements[espacementPouces] >= porteeTotal) {
                const porteeMax = espacements[espacementPouces];
                const marge = porteeMax - porteeTotal;
                
                // Déterminer le coût relatif (série 2x3 moins chère que 2x4)
                const coutRelatif = serie.includes('2x3') ? 1 : 1.2;
                
                poutrellesViables.push({
                    hauteur: hauteurInfo,
                    serie: serie,
                    espacementPouces: espacementPouces,
                    porteeMax: porteeMax,
                    marge: marge,
                    coutRelatif: coutRelatif
                });
            }
        }
    }
    
    // Trier selon l'optimisation choisie
    if (optimisation === 'hauteur') {
        poutrellesViables.sort((a, b) => {
            if (a.hauteur.pouces !== b.hauteur.pouces) return a.hauteur.pouces - b.hauteur.pouces;
            return a.coutRelatif - b.coutRelatif;
        });
    } else if (optimisation === 'espacement') {
        poutrellesViables.sort((a, b) => {
            if (a.espacementPouces !== b.espacementPouces) return b.espacementPouces - a.espacementPouces;
            return a.hauteur.pouces - b.hauteur.pouces;
        });
    } else if (optimisation === 'economique') {
        poutrellesViables.sort((a, b) => {
            const scoreA = a.coutRelatif * a.hauteur.pouces;
            const scoreB = b.coutRelatif * b.hauteur.pouces;
            return scoreA - scoreB;
        });
    }
    
    return poutrellesViables;
}

function afficherResultatsPoutrelles(poutrellesViables) {
    const container = document.getElementById('poutrelleResults');
    
    if (poutrellesViables.length === 0) {
        container.innerHTML = `
            <div class="no-solution">
                <h3>Aucune poutrelle viable trouvée</h3>
                <p>Les charges ou la portée dépassent les capacités disponibles.</p>
                <p>Suggestions :</p>
                <ul style="text-align: left; margin-top: 10px;">
                    <li>Réduire la portée</li>
                    <li>Augmenter la hauteur maximale autorisée</li>
                    <li>Considérer un espacement plus serré</li>
                    <li>Ajouter des appuis intermédiaires</li>
                </ul>
            </div>
        `;
        return;
    }

    let html = `
        <div class="poutrelle-options">
            <h3 style="margin-bottom: 20px; color: #2E8B57;">
                Poutrelles viables (${poutrellesViables.length} option${poutrellesViables.length > 1 ? 's' : ''})
            </h3>
    `;

    poutrellesViables.forEach((poutrelle, index) => {
        const economique = poutrelle.serie.includes('2x3') ? " (économique)" : "";
        const porteeMaxDisplay = formatPortee(poutrelle.porteeMax);
        const margeDisplay = formatPortee(poutrelle.marge);
        
        html += `
            <div class="poutrelle-option" onclick="selectionnerPoutrelle(${index})">
                <div class="poutrelle-title">
                    ${poutrelle.serie} × ${poutrelle.hauteur.display}${economique}
                </div>
                <div class="poutrelle-specs">
                    <div><strong>Espacement:</strong> ${poutrelle.espacementPouces}" c/c</div>
                    <div><strong>Portée max:</strong> ${porteeMaxDisplay}</div>
                    <div><strong>Marge:</strong> ${margeDisplay}</div>
                    <div><strong>Série:</strong> ${poutrelle.serie}</div>
                </div>
            </div>
        `;
    });

    html += `
        <div style="margin-top: 20px; padding: 15px; background: #e8f5e8; border-radius: 8px; font-size: 0.9em;">
            <strong>Configuration:</strong> Charges résidentielles standard (40 + 15 lb/pi²)<br>
            <em>Les portées respectent les critères de flèche L/360 (surcharge) et L/240 (charge totale).</em>
        </div>
    `;

    html += '</div>';
    container.innerHTML = html;
}

function formatPortee(porteeDecimal) {
    const pieds = Math.floor(porteeDecimal);
    const pouces = Math.round((porteeDecimal - pieds) * 12);
    return pouces === 0 ? `${pieds}'-0"` : `${pieds}'-${pouces}"`;
}

function afficherMessageErreur(message) {
    document.getElementById('poutrelleResults').innerHTML = `
        <p style="text-align: center; color: #c0392b; margin-top: 50px;">
            ${message}
        </p>
    `;
}

function selectionnerPoutrelle(index) {
    // Retirer la sélection précédente
    document.querySelectorAll('.poutrelle-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Ajouter la sélection à l'option cliquée
    document.querySelectorAll('.poutrelle-option')[index].classList.add('selected');
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    // Calculer automatiquement lors des changements de valeurs
    const inputs = [
        'porteePieds', 'porteePouces', 'espacement', 'chargeVive', 'chargeMorte', 
        'hauteurMax', 'optimisation', 'typePlancher', 'typePortee',
        'epaisseurSousPlancher', 'fixation', 'plafondGypse'
    ];
    
    inputs.forEach(inputId => {
        const element = document.getElementById(inputId);
        if (element) {
            element.addEventListener('input', function() {
                clearTimeout(this.timer);
                this.timer = setTimeout(calculerPoutrelles, 500);
            });
            
            element.addEventListener('change', function() {
                clearTimeout(this.timer);
                this.timer = setTimeout(calculerPoutrelles, 100);
            });
        }
    });
    
    // Pas de calcul initial - attendre que l'utilisateur entre les données
});