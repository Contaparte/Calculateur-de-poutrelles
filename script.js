// Données pour les poutrelles en I
const iJoistData = {
    "BCI 4500": {
        9.5: {12: 13.67, 16: 12.33, 19.2: 11.25, 24: 9.75},
        11.875: {12: 15.33, 16: 13.83, 19.2: 12.58, 24: 10.92},
        14: {12: 17.17, 16: 15.50, 19.2: 14.08, 24: 12.25},
        16: {12: 19.00, 16: 17.17, 19.2: 15.58, 24: 13.58},
        18: {12: 20.67, 16: 18.67, 19.2: 16.92, 24: 14.75},
        20: {12: 22.17, 16: 20.00, 19.2: 18.17, 24: 15.83},
        22: {12: 23.50, 16: 21.25, 19.2: 19.25, 24: 16.83},
        24: {12: 24.75, 16: 22.33, 19.2: 20.25, 24: 17.75}
    },
    "BCI 5000": {
        9.5: {12: 14.33, 16: 12.92, 19.2: 11.75, 24: 10.25},
        11.875: {12: 16.08, 16: 14.50, 19.2: 13.17, 24: 11.50},
        14: {12: 18.00, 16: 16.25, 19.2: 14.75, 24: 12.83},
        16: {12: 19.92, 16: 18.00, 19.2: 16.33, 24: 14.25},
        18: {12: 21.67, 16: 19.58, 19.2: 17.75, 24: 15.50},
        20: {12: 23.25, 16: 21.00, 19.2: 19.08, 24: 16.67},
        22: {12: 24.67, 16: 22.25, 19.2: 20.25, 24: 17.67},
        24: {12: 26.00, 16: 23.42, 19.2: 21.25, 24: 18.58}
    },
    "BCI 6000": {
        9.5: {12: 15.17, 16: 13.67, 19.2: 12.42, 24: 10.83},
        11.875: {12: 17.00, 16: 15.33, 19.2: 13.92, 24: 12.17},
        14: {12: 19.08, 16: 17.17, 19.2: 15.58, 24: 13.58},
        16: {12: 21.08, 16: 19.00, 19.2: 17.25, 24: 15.08},
        18: {12: 22.92, 16: 20.67, 19.2: 18.75, 24: 16.42},
        20: {12: 24.58, 16: 22.17, 19.2: 20.17, 24: 17.67},
        22: {12: 26.08, 16: 23.50, 19.2: 21.42, 24: 18.75},
        24: {12: 27.42, 16: 24.75, 19.2: 22.50, 24: 19.67}
    }
};

// Données pour les poutrelles ajourées (Open Web Joists)
const openWebJoistData = {
    "40_15": {
        "2x3 - 2400": {
            11.875: {12: 15.75, 16: 13.83, 19.2: 12.17, 24: 10.00},
            12.5: {12: 16.42, 16: 14.42, 19.2: 12.67, 24: 10.42},
            14: {12: 17.92, 16: 15.75, 19.2: 13.83, 24: 11.42},
            16: {12: 19.83, 16: 17.42, 19.2: 15.33, 24: 12.67},
            18: {12: 21.58, 16: 18.92, 19.2: 16.67, 24: 13.75},
            20: {12: 23.08, 16: 20.25, 19.2: 17.83, 24: 14.75},
            22: {12: 24.42, 16: 21.42, 19.2: 18.83, 24: 15.58},
            24: {12: 25.67, 16: 22.50, 19.2: 19.75, 24: 16.33}
        },
        "2x4 - 2400": {
            11.875: {12: 16.42, 16: 14.42, 19.2: 12.67, 24: 10.42},
            12.5: {12: 17.08, 16: 15.00, 19.2: 13.17, 24: 10.83},
            14: {12: 18.67, 16: 16.42, 19.2: 14.42, 24: 11.92},
            16: {12: 20.67, 16: 18.17, 19.2: 15.92, 24: 13.17},
            18: {12: 22.50, 16: 19.75, 19.2: 17.33, 24: 14.33},
            20: {12: 24.08, 16: 21.17, 19.2: 18.58, 24: 15.33},
            22: {12: 25.50, 16: 22.42, 19.2: 19.67, 24: 16.25},
            24: {12: 26.83, 16: 23.58, 19.2: 20.67, 24: 17.08}
        }
    },
    "100_30": {
        "2x3 - 2400": {
            11.875: {12: 14.33, 16: 12.58, 19.2: 11.08, 24: 9.17},
            12.5: {12: 14.92, 16: 13.08, 19.2: 11.50, 24: 9.50},
            14: {12: 16.33, 16: 14.33, 19.2: 12.58, 24: 10.42},
            16: {12: 18.08, 16: 15.83, 19.2: 13.92, 24: 11.50},
            18: {12: 19.67, 16: 17.25, 19.2: 15.17, 24: 12.50},
            20: {12: 21.00, 16: 18.42, 19.2: 16.17, 24: 13.33},
            22: {12: 22.25, 16: 19.50, 19.2: 17.08, 24: 14.08},
            24: {12: 23.42, 16: 20.50, 19.2: 17.92, 24: 14.75}
        },
        "2x4 - 2400": {
            11.875: {12: 14.92, 16: 13.08, 19.2: 11.50, 24: 9.50},
            12.5: {12: 15.50, 16: 13.58, 19.2: 11.92, 24: 9.83},
            14: {12: 16.92, 16: 14.83, 19.2: 13.08, 24: 10.75},
            16: {12: 18.75, 16: 16.42, 19.2: 14.42, 24: 11.92},
            18: {12: 20.42, 16: 17.92, 19.2: 15.75, 24: 13.00},
            20: {12: 21.83, 16: 19.17, 19.2: 16.83, 24: 13.92},
            22: {12: 23.17, 16: 20.33, 19.2: 17.83, 24: 14.75},
            24: {12: 24.42, 16: 21.42, 19.2: 18.75, 24: 15.50}
        }
    },
    "100_35": {
        "2x3 - 2400": {
            11.875: {12: 13.75, 16: 12.08, 19.2: 10.58, 24: 8.75},
            12.5: {12: 14.33, 16: 12.58, 19.2: 11.00, 24: 9.08},
            14: {12: 15.67, 16: 13.75, 19.2: 12.08, 24: 9.92},
            16: {12: 17.33, 16: 15.17, 19.2: 13.33, 24: 11.00},
            18: {12: 18.83, 16: 16.50, 19.2: 14.50, 24: 11.92},
            20: {12: 20.17, 16: 17.67, 19.2: 15.50, 24: 12.75},
            22: {12: 21.33, 16: 18.75, 19.2: 16.42, 24: 13.50},
            24: {12: 22.42, 16: 19.67, 19.2: 17.25, 24: 14.17}
        },
        "2x4 - 2400": {
            11.875: {12: 14.33, 16: 12.58, 19.2: 11.00, 24: 9.08},
            12.5: {12: 14.92, 16: 13.08, 19.2: 11.42, 24: 9.42},
            14: {12: 16.25, 16: 14.25, 19.2: 12.50, 24: 10.33},
            16: {12: 18.00, 16: 15.75, 19.2: 13.83, 24: 11.42},
            18: {12: 19.58, 16: 17.17, 19.2: 15.08, 24: 12.42},
            20: {12: 20.92, 16: 18.33, 19.2: 16.08, 24: 13.25},
            22: {12: 22.17, 16: 19.42, 19.2: 17.00, 24: 14.00},
            24: {12: 23.33, 16: 20.42, 19.2: 17.83, 24: 14.67}
        }
    }
};

// Données CCQ complètes basées sur les tableaux
const ccqJoistData = {
    "spf": {
        "select": {
            "38x89": {
                "lattes-continues": {300: 1.95, 400: 1.81, 600: 1.64},
                "entretoises": {300: 2.06, 400: 1.87, 600: 1.64},
                "lattes-entretoises": {300: 2.06, 400: 1.87, 600: 1.64},
                "chape-beton": {300: 2.06, 400: 1.87, 600: 1.64}
            },
            "38x140": {
                "lattes-continues": {300: 3.05, 400: 2.85, 600: 2.57},
                "entretoises": {300: 3.24, 400: 2.95, 600: 2.57},
                "lattes-entretoises": {300: 3.24, 400: 2.95, 600: 2.57},
                "chape-beton": {300: 3.24, 400: 2.95, 600: 2.57}
            },
            "38x184": {
                "lattes-continues": {300: 3.66, 400: 3.48, 600: 3.31},
                "entretoises": {300: 3.94, 400: 3.70, 600: 3.38},
                "lattes-entretoises": {300: 4.12, 400: 3.84, 600: 3.38},
                "chape-beton": {300: 4.26, 400: 3.87, 600: 3.38}
            },
            "38x235": {
                "lattes-continues": {300: 4.31, 400: 4.10, 600: 3.90},
                "entretoises": {300: 4.59, 400: 4.31, 600: 4.05},
                "lattes-entretoises": {300: 4.76, 400: 4.44, 600: 4.14},
                "chape-beton": {300: 5.45, 400: 4.95, 600: 4.32}
            },
            "38x286": {
                "lattes-continues": {300: 4.91, 400: 4.67, 600: 4.45},
                "entretoises": {300: 5.18, 400: 4.87, 600: 4.57},
                "lattes-entretoises": {300: 5.34, 400: 4.98, 600: 4.64},
                "chape-beton": {300: 6.45, 400: 6.01, 600: 5.26}
            }
        },
        "no1-2": {
            "38x89": {
                "lattes-continues": {300: 1.86, 400: 1.72, 600: 1.58},
                "entretoises": {300: 1.99, 400: 1.81, 600: 1.58},
                "lattes-entretoises": {300: 1.99, 400: 1.81, 600: 1.58},
                "chape-beton": {300: 1.99, 400: 1.81, 600: 1.58}
            },
            "38x140": {
                "lattes-continues": {300: 2.92, 400: 2.71, 600: 2.49},
                "entretoises": {300: 3.14, 400: 2.85, 600: 2.49},
                "lattes-entretoises": {300: 3.14, 400: 2.85, 600: 2.49},
                "chape-beton": {300: 3.14, 400: 2.85, 600: 2.49}
            },
            "38x184": {
                "lattes-continues": {300: 3.54, 400: 3.36, 600: 3.20},
                "entretoises": {300: 3.81, 400: 3.58, 600: 3.27},
                "lattes-entretoises": {300: 3.99, 400: 3.72, 600: 3.27},
                "chape-beton": {300: 4.12, 400: 3.75, 600: 3.27}
            },
            "38x235": {
                "lattes-continues": {300: 4.17, 400: 3.96, 600: 3.77},
                "entretoises": {300: 4.44, 400: 4.17, 600: 3.92},
                "lattes-entretoises": {300: 4.60, 400: 4.29, 600: 4.00},
                "chape-beton": {300: 5.27, 400: 4.79, 600: 4.18}
            },
            "38x286": {
                "lattes-continues": {300: 4.75, 400: 4.52, 600: 4.30},
                "entretoises": {300: 5.01, 400: 4.71, 600: 4.42},
                "lattes-entretoises": {300: 5.17, 400: 4.82, 600: 4.49},
                "chape-beton": {300: 6.23, 400: 5.81, 600: 4.79}
            }
        },
        "no3": {
            "38x89": {
                "lattes-continues": {300: 1.81, 400: 1.68, 600: 1.55},
                "entretoises": {300: 1.96, 400: 1.78, 600: 1.55},
                "lattes-entretoises": {300: 1.96, 400: 1.78, 600: 1.55},
                "chape-beton": {300: 1.96, 400: 1.78, 600: 1.50}
            },
            "38x140": {
                "lattes-continues": {300: 2.84, 400: 2.64, 600: 2.43},
                "entretoises": {300: 3.08, 400: 2.80, 600: 2.43},
                "lattes-entretoises": {300: 3.08, 400: 2.80, 600: 2.43},
                "chape-beton": {300: 3.02, 400: 2.62, 600: 2.14}
            },
            "38x184": {
                "lattes-continues": {300: 3.47, 400: 3.30, 600: 2.95},
                "entretoises": {300: 3.74, 400: 3.52, 600: 2.95},
                "lattes-entretoises": {300: 3.92, 400: 3.61, 600: 2.95},
                "chape-beton": {300: 3.68, 400: 3.18, 600: 2.60}
            },
            "38x235": {
                "lattes-continues": {300: 4.09, 400: 3.89, 600: 3.61},
                "entretoises": {300: 4.36, 400: 4.09, 600: 3.61},
                "lattes-entretoises": {300: 4.52, 400: 4.22, 600: 3.61},
                "chape-beton": {300: 4.50, 400: 3.89, 600: 3.18}
            },
            "38x286": {
                "lattes-continues": {300: 4.67, 400: 4.44, 600: 4.19},
                "entretoises": {300: 4.92, 400: 4.62, 600: 4.19},
                "lattes-entretoises": {300: 5.08, 400: 4.73, 600: 4.19},
                "chape-beton": {300: 5.22, 400: 4.52, 600: 3.69}
            }
        },
        "construction": {
            "38x89": {
                "lattes-continues": {300: 1.81, 400: 1.68, 600: 1.55},
                "entretoises": {300: 1.96, 400: 1.78, 600: 1.55},
                "lattes-entretoises": {300: 1.96, 400: 1.78, 600: 1.55},
                "chape-beton": {300: 1.96, 400: 1.78, 600: 1.55}
            }
        },
        "standard": {
            "38x89": {
                "lattes-continues": {300: 1.70, 400: 1.58, 600: 1.44},
                "entretoises": {300: 1.88, 400: 1.71, 600: 1.44},
                "lattes-entretoises": {300: 1.88, 400: 1.71, 600: 1.44},
                "chape-beton": {300: 1.80, 400: 1.56, 600: 1.27}
            }
        }
    },
    "douglas": {
        "select": {
            "38x89": {
                "lattes-continues": {300: 2.19, 400: 1.99, 600: 1.73},
                "entretoises": {300: 2.19, 400: 1.99, 600: 1.73},
                "lattes-entretoises": {300: 2.19, 400: 1.99, 600: 1.73},
                "chape-beton": {300: 2.19, 400: 1.99, 600: 1.73}
            },
            "38x140": {
                "lattes-continues": {300: 3.44, 400: 3.12, 600: 2.73},
                "entretoises": {300: 3.44, 400: 3.12, 600: 2.73},
                "lattes-entretoises": {300: 3.44, 400: 3.12, 600: 2.73},
                "chape-beton": {300: 3.44, 400: 3.12, 600: 2.73}
            },
            "38x184": {
                "lattes-continues": {300: 4.24, 400: 3.99, 600: 3.59},
                "entretoises": {300: 4.52, 400: 4.11, 600: 3.59},
                "lattes-entretoises": {300: 4.52, 400: 4.11, 600: 3.59},
                "chape-beton": {300: 4.52, 400: 4.11, 600: 3.59}
            },
            "38x235": {
                "lattes-continues": {300: 4.98, 400: 4.69, 600: 4.29},
                "entretoises": {300: 5.47, 400: 5.20, 600: 4.58},
                "lattes-entretoises": {300: 5.77, 400: 5.24, 600: 4.58},
                "chape-beton": {300: 5.77, 400: 5.24, 600: 4.58}
            },
            "38x286": {
                "lattes-continues": {300: 5.67, 400: 5.34, 600: 4.88},
                "entretoises": {300: 6.19, 400: 5.89, 600: 5.54},
                "lattes-entretoises": {300: 6.83, 400: 6.37, 600: 5.58},
                "chape-beton": {300: 6.83, 400: 6.37, 600: 5.58}
            }
        },
        "no1-2": {
            "38x89": {
                "lattes-continues": {300: 2.09, 400: 1.90, 600: 1.66},
                "entretoises": {300: 2.09, 400: 1.90, 600: 1.66},
                "lattes-entretoises": {300: 2.09, 400: 1.90, 600: 1.66},
                "chape-beton": {300: 2.09, 400: 1.90, 600: 1.66}
            },
            "38x140": {
                "lattes-continues": {300: 3.29, 400: 2.99, 600: 2.62},
                "entretoises": {300: 3.29, 400: 2.99, 600: 2.62},
                "lattes-entretoises": {300: 3.29, 400: 2.99, 600: 2.62},
                "chape-beton": {300: 3.29, 400: 2.99, 600: 2.55}
            },
            "38x184": {
                "lattes-continues": {300: 4.06, 400: 3.83, 600: 3.44},
                "entretoises": {300: 4.33, 400: 3.93, 600: 3.44},
                "lattes-entretoises": {300: 4.33, 400: 3.81, 600: 3.11},
                "chape-beton": {300: 4.33, 400: 3.81, 600: 3.11}
            },
            "38x235": {
                "lattes-continues": {300: 4.78, 400: 4.50, 600: 4.11},
                "entretoises": {300: 5.24, 400: 4.98, 600: 4.31},
                "lattes-entretoises": {300: 5.37, 400: 4.65, 600: 3.80},
                "chape-beton": {300: 5.37, 400: 4.65, 600: 3.80}
            },
            "38x286": {
                "lattes-continues": {300: 5.44, 400: 5.12, 600: 4.68},
                "entretoises": {300: 5.93, 400: 5.64, 600: 5.00},
                "lattes-entretoises": {300: 6.24, 400: 5.40, 600: 4.41},
                "chape-beton": {300: 6.24, 400: 5.40, 600: 4.41}
            }
        },
        "no3": {
            "38x89": {
                "lattes-continues": {300: 1.95, 400: 1.69, 600: 1.38},
                "entretoises": {300: 1.95, 400: 1.69, 600: 1.38},
                "lattes-entretoises": {300: 1.72, 400: 1.49, 600: 1.21},
                "chape-beton": {300: 1.72, 400: 1.49, 600: 1.21}
            },
            "38x140": {
                "lattes-continues": {300: 2.78, 400: 2.41, 600: 1.97},
                "entretoises": {300: 2.78, 400: 2.41, 600: 1.97},
                "lattes-entretoises": {300: 2.45, 400: 2.12, 600: 1.73},
                "chape-beton": {300: 2.45, 400: 2.12, 600: 1.73}
            },
            "38x184": {
                "lattes-continues": {300: 3.38, 400: 2.93, 600: 2.39},
                "entretoises": {300: 3.38, 400: 2.93, 600: 2.39},
                "lattes-entretoises": {300: 2.98, 400: 2.58, 600: 2.11},
                "chape-beton": {300: 2.98, 400: 2.58, 600: 2.11}
            },
            "38x235": {
                "lattes-continues": {300: 4.14, 400: 3.58, 600: 2.93},
                "entretoises": {300: 4.14, 400: 3.58, 600: 2.93},
                "lattes-entretoises": {300: 3.65, 400: 3.16, 600: 2.58},
                "chape-beton": {300: 3.65, 400: 3.16, 600: 2.58}
            },
            "38x286": {
                "lattes-continues": {300: 4.80, 400: 4.16, 600: 3.39},
                "entretoises": {300: 4.80, 400: 4.16, 600: 3.39},
                "lattes-entretoises": {300: 4.23, 400: 3.66, 600: 2.99},
                "chape-beton": {300: 4.23, 400: 3.66, 600: 2.99}
            }
        },
        "construction": {
            "38x89": {
                "lattes-continues": {300: 2.03, 400: 1.84, 600: 1.61},
                "entretoises": {300: 2.03, 400: 1.84, 600: 1.61},
                "lattes-entretoises": {300: 2.03, 400: 1.84, 600: 1.61},
                "chape-beton": {300: 2.03, 400: 1.84, 600: 1.61}
            }
        },
        "standard": {
            "38x89": {
                "lattes-continues": {300: 1.88, 400: 1.63, 600: 1.33},
                "entretoises": {300: 1.88, 400: 1.63, 600: 1.33},
                "lattes-entretoises": {300: 1.66, 400: 1.44, 600: 1.17},
                "chape-beton": {300: 1.66, 400: 1.44, 600: 1.17}
            }
        }
    },
    "hem-fir": {
        "select": {
            "38x89": {
                "lattes-continues": {300: 2.16, 400: 1.96, 600: 1.71},
                "entretoises": {300: 2.16, 400: 1.96, 600: 1.71},
                "lattes-entretoises": {300: 2.16, 400: 1.96, 600: 1.71},
                "chape-beton": {300: 2.16, 400: 1.96, 600: 1.71}
            },
            "38x140": {
                "lattes-continues": {300: 3.39, 400: 3.08, 600: 2.69},
                "entretoises": {300: 3.39, 400: 3.08, 600: 2.69},
                "lattes-entretoises": {300: 3.39, 400: 3.08, 600: 2.69},
                "chape-beton": {300: 3.39, 400: 3.08, 600: 2.69}
            },
            "38x184": {
                "lattes-continues": {300: 4.18, 400: 3.94, 600: 3.54},
                "entretoises": {300: 4.46, 400: 4.05, 600: 3.54},
                "lattes-entretoises": {300: 4.46, 400: 4.05, 600: 3.54},
                "chape-beton": {300: 4.46, 400: 4.05, 600: 3.54}
            },
            "38x235": {
                "lattes-continues": {300: 4.92, 400: 4.63, 600: 4.23},
                "entretoises": {300: 5.39, 400: 5.13, 600: 4.52},
                "lattes-entretoises": {300: 5.69, 400: 5.17, 600: 4.52},
                "chape-beton": {300: 5.69, 400: 5.17, 600: 4.52}
            },
            "38x286": {
                "lattes-continues": {300: 5.60, 400: 5.27, 600: 4.82},
                "entretoises": {300: 6.10, 400: 5.81, 600: 5.47},
                "lattes-entretoises": {300: 6.74, 400: 6.28, 600: 5.50},
                "chape-beton": {300: 6.74, 400: 6.28, 600: 5.50}
            }
        },
        "no1-2": {
            "38x89": {
                "lattes-continues": {300: 2.09, 400: 1.90, 600: 1.66},
                "entretoises": {300: 2.09, 400: 1.90, 600: 1.66},
                "lattes-entretoises": {300: 2.09, 400: 1.90, 600: 1.66},
                "chape-beton": {300: 2.09, 400: 1.90, 600: 1.66}
            },
            "38x140": {
                "lattes-continues": {300: 3.29, 400: 2.99, 600: 2.62},
                "entretoises": {300: 3.29, 400: 2.99, 600: 2.62},
                "lattes-entretoises": {300: 3.29, 400: 2.99, 600: 2.62},
                "chape-beton": {300: 3.29, 400: 2.99, 600: 2.62}
            },
            "38x184": {
                "lattes-continues": {300: 4.06, 400: 3.83, 600: 3.44},
                "entretoises": {300: 4.33, 400: 3.93, 600: 3.44},
                "lattes-entretoises": {300: 4.33, 400: 3.93, 600: 3.26},
                "chape-beton": {300: 4.33, 400: 3.93, 600: 3.26}
            },
            "38x235": {
                "lattes-continues": {300: 4.78, 400: 4.50, 600: 4.11},
                "entretoises": {300: 5.24, 400: 4.98, 600: 4.39},
                "lattes-entretoises": {300: 5.53, 400: 4.88, 600: 3.99},
                "chape-beton": {300: 5.53, 400: 4.88, 600: 3.99}
            },
            "38x286": {
                "lattes-continues": {300: 5.44, 400: 5.12, 600: 4.68},
                "entretoises": {300: 5.93, 400: 5.64, 600: 5.25},
                "lattes-entretoises": {300: 6.54, 400: 5.66, 600: 4.63},
                "chape-beton": {300: 6.54, 400: 5.66, 600: 4.63}
            }
        },
        "no3": {
            "38x89": {
                "lattes-continues": {300: 2.03, 400: 1.84, 600: 1.61},
                "entretoises": {300: 2.03, 400: 1.84, 600: 1.61},
                "lattes-entretoises": {300: 2.03, 400: 1.83, 600: 1.50},
                "chape-beton": {300: 2.03, 400: 1.83, 600: 1.50}
            },
            "38x140": {
                "lattes-continues": {300: 3.19, 400: 2.90, 600: 2.43},
                "entretoises": {300: 3.19, 400: 2.90, 600: 2.43},
                "lattes-entretoises": {300: 3.02, 400: 2.62, 600: 2.14},
                "chape-beton": {300: 3.02, 400: 2.62, 600: 2.14}
            },
            "38x184": {
                "lattes-continues": {300: 3.94, 400: 3.61, 600: 2.95},
                "entretoises": {300: 4.17, 400: 3.61, 600: 2.95},
                "lattes-entretoises": {300: 3.68, 400: 3.18, 600: 2.60},
                "chape-beton": {300: 3.68, 400: 3.18, 600: 2.60}
            },
            "38x235": {
                "lattes-continues": {300: 4.63, 400: 4.36, 600: 3.61},
                "entretoises": {300: 5.08, 400: 4.42, 600: 3.61},
                "lattes-entretoises": {300: 4.50, 400: 3.89, 600: 3.18},
                "chape-beton": {300: 4.50, 400: 3.89, 600: 3.18}
            },
            "38x286": {
                "lattes-continues": {300: 5.27, 400: 4.96, 600: 4.19},
                "entretoises": {300: 5.74, 400: 5.13, 600: 4.19},
                "lattes-entretoises": {300: 5.22, 400: 4.52, 600: 3.69},
                "chape-beton": {300: 5.22, 400: 4.52, 600: 3.69}
            }
        },
        "construction": {
            "38x89": {
                "lattes-continues": {300: 2.03, 400: 1.84, 600: 1.61},
                "entretoises": {300: 2.03, 400: 1.84, 600: 1.61},
                "lattes-entretoises": {300: 2.03, 400: 1.84, 600: 1.61},
                "chape-beton": {300: 2.03, 400: 1.84, 600: 1.61}
            }
        },
        "standard": {
            "38x89": {
                "lattes-continues": {300: 1.96, 400: 1.71, 600: 1.39},
                "entretoises": {300: 1.96, 400: 1.71, 600: 1.39},
                "lattes-entretoises": {300: 1.74, 400: 1.50, 600: 1.23},
                "chape-beton": {300: 1.74, 400: 1.50, 600: 1.23}
            }
        }
    },
    "northern": {
        "select": {
            "38x89": {
                "lattes-continues": {300: 1.65, 400: 1.53, 600: 1.42},
                "entretoises": {300: 1.84, 400: 1.68, 600: 1.46},
                "lattes-entretoises": {300: 1.84, 400: 1.68, 600: 1.46},
                "chape-beton": {300: 1.84, 400: 1.68, 600: 1.46}
            },
            "38x140": {
                "lattes-continues": {300: 2.59, 400: 2.41, 600: 2.24},
                "entretoises": {300: 2.90, 400: 2.63, 600: 2.30},
                "lattes-entretoises": {300: 2.90, 400: 2.63, 600: 2.30},
                "chape-beton": {300: 2.90, 400: 2.63, 600: 2.30}
            },
            "38x184": {
                "lattes-continues": {300: 3.27, 400: 3.11, 600: 2.94},
                "entretoises": {300: 3.52, 400: 3.31, 600: 3.03},
                "lattes-entretoises": {300: 3.69, 400: 3.44, 600: 3.03},
                "chape-beton": {300: 3.69, 400: 3.44, 600: 3.03}
            },
            "38x235": {
                "lattes-continues": {300: 3.85, 400: 3.66, 600: 3.48},
                "entretoises": {300: 4.10, 400: 3.85, 600: 3.62},
                "lattes-entretoises": {300: 4.26, 400: 3.97, 600: 3.70},
                "chape-beton": {300: 4.26, 400: 3.97, 600: 3.70}
            },
            "38x286": {
                "lattes-continues": {300: 4.39, 400: 4.18, 600: 3.97},
                "entretoises": {300: 4.63, 400: 4.35, 600: 4.09},
                "lattes-entretoises": {300: 4.78, 400: 4.45, 600: 4.15},
                "chape-beton": {300: 4.78, 400: 4.45, 600: 4.15}
            }
        },
        "no1-2": {
            "38x89": {
                "lattes-continues": {300: 1.59, 400: 1.48, 600: 1.37},
                "entretoises": {300: 1.80, 400: 1.64, 600: 1.43},
                "lattes-entretoises": {300: 1.80, 400: 1.64, 600: 1.43},
                "chape-beton": {300: 1.80, 400: 1.64, 600: 1.43}
            },
            "38x140": {
                "lattes-continues": {300: 2.51, 400: 2.33, 600: 2.16},
                "entretoises": {300: 2.83, 400: 2.57, 600: 2.25},
                "lattes-entretoises": {300: 2.83, 400: 2.57, 600: 2.25},
                "chape-beton": {300: 2.83, 400: 2.57, 600: 2.23}
            },
            "38x184": {
                "lattes-continues": {300: 3.19, 400: 3.04, 600: 2.84},
                "entretoises": {300: 3.44, 400: 3.23, 600: 2.96},
                "lattes-entretoises": {300: 3.60, 400: 3.36, 600: 2.96},
                "chape-beton": {300: 3.72, 400: 3.32, 600: 2.71}
            },
            "38x235": {
                "lattes-continues": {300: 3.76, 400: 3.58, 600: 3.41},
                "entretoises": {300: 4.01, 400: 3.77, 600: 3.54},
                "lattes-entretoises": {300: 4.16, 400: 3.88, 600: 3.62},
                "chape-beton": {300: 4.69, 400: 4.06, 600: 3.31}
            },
            "38x286": {
                "lattes-continues": {300: 4.29, 400: 4.08, 600: 3.88},
                "entretoises": {300: 4.53, 400: 4.25, 600: 4.00},
                "lattes-entretoises": {300: 4.67, 400: 4.35, 600: 4.06},
                "chape-beton": {300: 5.44, 400: 4.71, 600: 3.84}
            }
        },
        "no3": {
            "38x89": {
                "lattes-continues": {300: 1.54, 400: 1.43, 600: 1.32},
                "entretoises": {300: 1.74, 400: 1.57, 600: 1.36},
                "lattes-entretoises": {300: 1.76, 400: 1.60, 600: 1.36},
                "chape-beton": {300: 1.70, 400: 1.47, 600: 1.20}
            },
            "38x140": {
                "lattes-continues": {300: 2.42, 400: 2.24, 600: 1.94},
                "entretoises": {300: 2.74, 400: 2.38, 600: 1.94},
                "lattes-entretoises": {300: 2.75, 400: 2.38, 600: 1.94},
                "chape-beton": {300: 2.42, 400: 2.10, 600: 1.71}
            },
            "38x184": {
                "lattes-continues": {300: 3.12, 400: 2.90, 600: 2.37},
                "entretoises": {300: 3.35, 400: 2.90, 600: 2.37},
                "lattes-entretoises": {300: 3.35, 400: 2.90, 600: 2.37},
                "chape-beton": {300: 2.95, 400: 2.55, 600: 2.08}
            },
            "38x235": {
                "lattes-continues": {300: 3.67, 400: 3.49, 600: 2.89},
                "entretoises": {300: 3.91, 400: 3.54, 600: 2.89},
                "lattes-entretoises": {300: 4.06, 400: 3.54, 600: 2.89},
                "chape-beton": {300: 3.61, 400: 3.12, 600: 2.55}
            },
            "38x286": {
                "lattes-continues": {300: 4.19, 400: 3.98, 600: 3.36},
                "entretoises": {300: 4.42, 400: 4.11, 600: 3.36},
                "lattes-entretoises": {300: 4.55, 400: 4.11, 600: 3.36},
                "chape-beton": {300: 4.18, 400: 3.62, 600: 2.96}
            }
        },
        "construction": {
            "38x89": {
                "lattes-continues": {300: 1.54, 400: 1.43, 600: 1.32},
                "entretoises": {300: 1.74, 400: 1.57, 600: 1.40},
                "lattes-entretoises": {300: 1.76, 400: 1.60, 600: 1.40},
                "chape-beton": {300: 1.76, 400: 1.60, 600: 1.37}
            }
        },
        "standard": {
            "38x89": {
                "lattes-continues": {300: 1.48, 400: 1.37, 600: 1.15},
                "entretoises": {300: 1.63, 400: 1.41, 600: 1.15},
                "lattes-entretoises": {300: 1.63, 400: 1.41, 600: 1.15},
                "chape-beton": {300: 1.44, 400: 1.25, 600: 1.02}
            }
        }
    }
};

// Labels pour l'affichage
const essenceLabels = {
    "spf": "Spruce-Pine-Fir (SPF)",
    "douglas": "Douglas Fir - Larch", 
    "hem-fir": "Hem-Fir",
    "northern": "Northern Species"
};

const qualiteLabels = {
    "select": "Select Structural",
    "no1-2": "No 1 & 2",
    "no3": "No 3", 
    "construction": "Construction",
    "standard": "Standard"
};

const dimensionsLabels = {
    "38x89": "38 x 89 mm",
    "38x140": "38 x 140 mm",
    "38x184": "38 x 184 mm", 
    "38x235": "38 x 235 mm",
    "38x286": "38 x 286 mm"
};

const supportLabels = {
    "lattes-continues": "Lattes continues",
    "entretoises": "Entretoises",
    "lattes-entretoises": "Lattes continues et entretoises",
    "chape-beton": "Avec chape de béton"
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

function showTab(tabName) {
    // Masquer tous les contenus d'onglets
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    
    // Retirer la classe active de tous les onglets
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Afficher le contenu de l'onglet sélectionné
    document.getElementById(tabName).classList.add('active');
    
    // Ajouter la classe active à l'onglet correspondant
    const activeTab = Array.from(tabs).find(tab => 
        tab.getAttribute('onclick').includes(tabName)
    );
    if (activeTab) {
        activeTab.classList.add('active');
    }
}

function selectionnerPoutrelle(index, tabType) {
    // Retirer la sélection précédente
    document.querySelectorAll('.poutrelle-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Ajouter la sélection à l'option cliquée
    document.querySelectorAll('.poutrelle-option')[index].classList.add('selected');
}

// Fonctions pour les poutrelles en I
function calculerPoutrellesI() {
    // Récupération des valeurs d'entrée
    const porteePieds = parseFloat(document.getElementById('porteePieds-i').value) || 0;
    const porteePouces = parseFloat(document.getElementById('porteePouces-i').value) || 0;
    const portee = porteePieds + (porteePouces / 12);
    
    const chargeMorte = parseFloat(document.getElementById('chargeMorte-i').value);
    const chargeVive = parseFloat(document.getElementById('chargeVive-i').value);
    const chargeViveNeige = parseFloat(document.getElementById('chargeViveNeige-i').value) || 0;
    const subfloorThickness = parseFloat(document.getElementById('subfloorThickness-i').value);
    const hauteurMax = parseFloat(document.getElementById('hauteurMax-i').value) || 30;
    const espacementPrefere = parseFloat(document.getElementById('espacementPrefere-i').value);
    
    const subfloorAttachment = document.querySelector('input[name="subfloor-attachment-i"]:checked').value;
    const spanType = document.querySelector('input[name="span-type-i"]:checked').value;
    const gypsum = document.querySelector('input[name="gypsum-i"]:checked').value;

    // Validation des entrées
    if (portee <= 0 || isNaN(chargeMorte) || isNaN(chargeVive) || chargeMorte <= 0 || chargeVive <= 0) {
        resetResultsI();
        return;
    }

    // Calcul des charges pondérées
    const chargeTotaleNonPonderee = chargeMorte + chargeVive + chargeViveNeige;
    let chargeTotalePonderee;
    
    if (chargeViveNeige > 0) {
        chargeTotalePonderee = Math.max(
            1.25 * (chargeMorte + chargeVive),
            1.25 * chargeMorte + 1.5 * chargeViveNeige,
            1.25 * chargeMorte + 1.5 * chargeVive
        );
    } else {
        chargeTotalePonderee = 1.25 * chargeMorte + 1.5 * chargeVive;
    }

    // Affichage des charges
    document.getElementById('resultTotaleNonPonderee-i').textContent = `${chargeTotaleNonPonderee.toFixed(0)} lb/pi.ca.`;
    document.getElementById('resultTotalePonderee-i').textContent = `${chargeTotalePonderee.toFixed(0)} lb/pi.ca.`;

    // Recherche des poutrelles viables
    const poutrellesViables = trouverPoutrellesViables(portee, espacementPrefere, hauteurMax);
    afficherResultatsPoutrellesI(poutrellesViables, portee, chargeTotaleNonPonderee, chargeTotalePonderee);
}

function trouverPoutrellesViables(portee, espacement, hauteurMax) {
    const poutrellesViables = [];
    
    Object.keys(iJoistData).forEach(series => {
        Object.keys(iJoistData[series]).forEach(height => {
            const heightNum = parseFloat(height);
            if (heightNum <= hauteurMax) {
                const spacingData = iJoistData[series][height];
                if (spacingData[espacement]) {
                    const maxSpan = parseFloat(spacingData[espacement]);
                    if (maxSpan >= portee) {
                        const ratio = maxSpan / portee;
                        poutrellesViables.push({
                            series: series,
                            height: height,
                            spacing: espacement,
                            maxSpan: formatSpan(maxSpan),
                            ratio: ratio
                        });
                    }
                }
            }
        });
    });
    
    // Trier par ratio (efficacité)
    poutrellesViables.sort((a, b) => a.ratio - b.ratio);
    
    return poutrellesViables.slice(0, 10); // Limiter à 10 options
}

function afficherResultatsPoutrellesI(poutrellesViables, portee, chargeTotaleNonPonderee, chargeTotalePonderee) {
    const container = document.getElementById('poutrelleResults-i');
    
    if (poutrellesViables.length === 0) {
        container.innerHTML = `
            <div class="no-solution">
                <h3>Aucune solution trouvée</h3>
                <p>Aucune poutrelle ne peut supporter cette portée avec les paramètres choisis.</p>
                <p>Suggestions :</p>
                <ul style="text-align: left; margin-top: 10px;">
                    <li>Réduire la portée</li>
                    <li>Augmenter la hauteur maximale autorisée</li>
                    <li>Réduire l'espacement des poutrelles</li>
                </ul>
            </div>
        `;
        return;
    }
    
    let html = `
        <div class="poutrelle-options">
            <h3>
                Solutions viables (${poutrellesViables.length} option${poutrellesViables.length > 1 ? 's' : ''})
            </h3>
    `;

    poutrellesViables.forEach((poutrelle, index) => {
        const utilizationPercent = ((1 / poutrelle.ratio) * 100).toFixed(0);
        
        html += `
            <div class="poutrelle-option" onclick="selectionnerPoutrelle(${index}, 'i')">
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

    html += `
        <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 8px; font-size: 0.9em;">
            <strong>Charges de conception:</strong><br>
            Charge totale non pondérée: ${chargeTotaleNonPonderee.toFixed(0)} lb/pi.ca. | 
            Charge totale pondérée: ${chargeTotalePonderee.toFixed(0)} lb/pi.ca.
        </div>
    `;

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

// Fonctions pour les poutrelles ajourées
function calculerPoutrellesAjourees() {
    // Récupération des valeurs d'entrée
    const porteePieds = parseFloat(document.getElementById('porteePieds-a').value) || 0;
    const porteePouces = parseFloat(document.getElementById('porteePouces-a').value) || 0;
    const portee = porteePieds + (porteePouces / 12);
    
    const chargeMorte = parseFloat(document.getElementById('chargeMorte-a').value);
    const chargeVive = parseFloat(document.getElementById('chargeVive-a').value);
    const espacement = parseFloat(document.getElementById('espacement-a').value);
    const hauteurMax = parseFloat(document.getElementById('hauteurMax-a').value) || 999;

    // Validation des entrées
    if (portee <= 0 || isNaN(chargeMorte) || isNaN(chargeVive) || isNaN(espacement) || chargeMorte <= 0 || chargeVive <= 0 || espacement <= 0) {
        resetResultsA();
        return;
    }

    // Affichage des charges appliquées
    document.getElementById('resultChargesAppliquees-a').textContent = `${chargeMorte} + ${chargeVive} lb/pi.ca.`;

    // Déterminer le cas de charge
    const loadCase = `${chargeVive}_${chargeMorte}`;
    const data = openWebJoistData[loadCase];
    
    if (!data) {
        document.getElementById('poutrelleResults-a').innerHTML = `
            <div class="no-solution">
                <h3>Combinaison de charges non supportée</h3>
                <p>La combinaison ${chargeVive} lb CV + ${chargeMorte} lb CM n'est pas disponible dans les tableaux.</p>
                <p>Combinaisons disponibles :</p>
                <ul style="text-align: left; margin-top: 10px;">
                    <li>40 lb CV + 15 lb CM</li>
                    <li>100 lb CV + 30 lb CM</li>
                    <li>100 lb CV + 35 lb CM</li>
                </ul>
            </div>
        `;
        return;
    }

    // Recherche des poutrelles viables
    const poutrellesViables = trouverPoutrellesAjoureesViables(data, portee, espacement, hauteurMax);
    afficherResultatsPoutrellesAjourees(poutrellesViables, portee, chargeMorte, chargeVive);
}

function trouverPoutrellesAjoureesViables(data, portee, espacement, hauteurMax) {
    const poutrellesViables = [];
    
    Object.keys(data).forEach(series => {
        Object.keys(data[series]).forEach(height => {
            const heightNum = parseFloat(height);
            if (heightNum <= hauteurMax) {
                const spacingData = data[series][height];
                if (spacingData[espacement]) {
                    const maxSpan = parseFloat(spacingData[espacement]);
                    if (maxSpan >= portee) {
                        const ratio = maxSpan / portee;
                        poutrellesViables.push({
                            series: series,
                            height: height,
                            spacing: espacement,
                            maxSpan: formatSpan(maxSpan),
                            ratio: ratio
                        });
                    }
                }
            }
        });
    });
    
    // Trier par ratio (efficacité)
    poutrellesViables.sort((a, b) => a.ratio - b.ratio);
    
    return poutrellesViables;
}

function afficherResultatsPoutrellesAjourees(poutrellesViables, portee, chargeMorte, chargeVive) {
    const container = document.getElementById('poutrelleResults-a');
    
    if (poutrellesViables.length === 0) {
        container.innerHTML = `
            <div class="no-solution">
                <h3>Aucune solution trouvée</h3>
                <p>Aucune poutrelle ajourée ne peut supporter cette portée avec les paramètres choisis.</p>
                <p>Suggestions :</p>
                <ul style="text-align: left; margin-top: 10px;">
                    <li>Réduire la portée</li>
                    <li>Augmenter la hauteur maximale autorisée</li>
                    <li>Réduire l'espacement des poutrelles</li>
                </ul>
            </div>
        `;
        return;
    }
    
    let html = `
        <div class="poutrelle-options">
            <h3>
                Solutions viables (${poutrellesViables.length} option${poutrellesViables.length > 1 ? 's' : ''})
            </h3>
    `;

    poutrellesViables.forEach((poutrelle, index) => {
        const utilizationPercent = ((1 / poutrelle.ratio) * 100).toFixed(0);
        
        html += `
            <div class="poutrelle-option" onclick="selectionnerPoutrelle(${index}, 'a')">
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

    html += `
        <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 8px; font-size: 0.9em;">
            <strong>Charges de conception:</strong><br>
            Charge morte: ${chargeMorte} lb/pi.ca. | 
            Charge vive: ${chargeVive} lb/pi.ca.
        </div>
    `;

    html += '</div>';
    container.innerHTML = html;
}

function resetResultsA() {
    document.getElementById('resultChargesAppliquees-a').textContent = '-';
    document.getElementById('poutrelleResults-a').innerHTML = `
        <p style="text-align: center; color: #A0522D; margin-top: 50px;">
            Entrez les paramètres pour voir les options de poutrelles.
        </p>
    `;
}

// Fonctions pour les solives CCQ
function convertMetersToFeetInches(meters) {
    const totalFeet = meters * 3.28084;
    const feet = Math.floor(totalFeet);
    const inches = Math.round((totalFeet - feet) * 12);
    return `${feet}'-${inches}"`;
}

function calculerSolivesCCQ() {
    // Récupération des valeurs d'entrée
    const porteePieds = parseFloat(document.getElementById('porteePieds-ccq').value) || 0;
    const porteePouces = parseFloat(document.getElementById('porteePouces-ccq').value) || 0;
    const porteeMeters = (porteePieds + (porteePouces / 12)) * 0.3048; // Conversion en mètres
    
    const essence = document.getElementById('essence-ccq').value;
    const qualite = document.getElementById('qualite-ccq').value;
    const dimensions = document.getElementById('dimensions-ccq').value;
    const espacement = parseInt(document.getElementById('espacement-ccq').value);
    const support = document.getElementById('support-ccq').value;
    const special = document.querySelector('input[name="special-ccq"]:checked').value;

    // Validation des entrées
    if (porteeMeters <= 0 || !essence || !qualite || !dimensions || !espacement || !support) {
        resetResultsCCQ();
        return;
    }

    // Affichage de la portée demandée
    document.getElementById('resultPorteeDemandee-ccq').textContent = `${porteePieds}'-${porteePouces}"`;

    // Recherche des solives viables
    const solvesViables = trouverSolivesCCQ(essence, qualite, dimensions, espacement, support, porteeMeters, special);
    afficherResultatsSolivesCCQ(solvesViables, porteeMeters, essence, qualite, dimensions, espacement, support);
}

function trouverSolivesCCQ(essence, qualite, dimensions, espacement, support, porteeMeters, special) {
    const solvesViables = [];
    
    // Vérifier si la combinaison existe dans les données CCQ
    if (!ccqJoistData[essence] || !ccqJoistData[essence][qualite] || !ccqJoistData[essence][qualite][dimensions]) {
        return solvesViables;
    }
    
    const dimensionData = ccqJoistData[essence][qualite][dimensions];
    
    if (!dimensionData[support]) {
        return solvesViables;
    }
    
    const porteeMaximale = dimensionData[support][espacement];
    
    if (porteeMaximale && porteeMaximale >= porteeMeters) {
        const ratio = porteeMaximale / porteeMeters;
        solvesViables.push({
            essence: essence,
            qualite: qualite,
            dimensions: dimensions,
            espacement: espacement,
            support: support,
            porteeMaximale: porteeMaximale,
            ratio: ratio
        });
    }
    
    return solvesViables;
}

function afficherResultatsSolivesCCQ(solvesViables, porteeMeters, essence, qualite, dimensions, espacement, support) {
    const container = document.getElementById('soliveResults-ccq');
    const statusBox = document.getElementById('status-box-ccq');
    const statusElement = document.getElementById('resultStatut-ccq');
    
    if (solvesViables.length === 0) {
        statusElement.textContent = 'NON CONFORME';
        statusBox.className = 'result-card status-error';
        container.innerHTML = `
            <div class="no-solution">
                <h3>Aucune solution trouvée</h3>
                <p>La combinaison sélectionnée ne peut supporter cette portée.</p>
                <p>Suggestions :</p>
                <ul style="text-align: left; margin-top: 10px;">
                    <li>Choisir une qualité de bois supérieure</li>
                    <li>Augmenter les dimensions de la solive</li>
                    <li>Réduire l'espacement entre solives</li>
                    <li>Réduire la portée demandée</li>
                </ul>
            </div>
        `;
        return;
    }
    
    const bestOption = solvesViables[0];
    const utilizationPercent = ((1 / bestOption.ratio) * 100).toFixed(0);
    const porteeMaxStr = convertMetersToFeetInches(bestOption.porteeMaximale);
    
    // Déterminer le statut
    let statusClass = 'status-success';
    let statusText = 'CONFORME';
    
    if (bestOption.ratio < 1.1) {
        statusClass = 'status-warning';
        statusText = 'LIMITE';
    }
    
    statusElement.textContent = statusText;
    statusBox.className = `result-card ${statusClass}`;
    
    let html = `
        <div class="poutrelle-options">
            <div class="poutrelle-option ${bestOption.ratio >= 1.1 ? 'status-success' : 'status-error'}">
                <div class="poutrelle-title">
                    ${essenceLabels[essence]} - ${qualiteLabels[qualite]}
                </div>
                <div class="poutrelle-specs">
                    <div><strong>Dimensions:</strong> ${dimensionsLabels[dimensions]}</div>
                    <div><strong>Espacement:</strong> ${espacement} mm</div>
                    <div><strong>Support:</strong> ${supportLabels[support]}</div>
                    <div><strong>Portée max:</strong> ${porteeMaxStr}</div>
                    <div><strong>Ratio:</strong> ${bestOption.ratio.toFixed(2)}</div>
                    <div><strong>Utilisation:</strong> ${utilizationPercent}%</div>
                </div>
            </div>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 8px; font-size: 0.9em;">
            <strong>Paramètres de conception:</strong><br>
            Essence: ${essenceLabels[essence]} | 
            Qualité: ${qualiteLabels[qualite]} | 
            Portée demandée: ${convertMetersToFeetInches(porteeMeters)}
        </div>
    `;

    container.innerHTML = html;
}

function resetResultsCCQ() {
    document.getElementById('resultPorteeDemandee-ccq').textContent = '-';
    const statusBox = document.getElementById('status-box-ccq');
    const statusElement = document.getElementById('resultStatut-ccq');
    statusElement.textContent = '-';
    statusBox.className = 'result-card';
    
    document.getElementById('soliveResults-ccq').innerHTML = `
        <p style="text-align: center; color: #A0522D; margin-top: 50px;">
            Entrez les paramètres pour voir les options de solives CCQ.
        </p>
    `;
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    console.log('Calculateur de poutrelles chargé');
    
    // Ajout des écouteurs d'événements pour les poutrelles en I
    const inputsI = ['porteePieds-i', 'porteePouces-i', 'chargeMorte-i', 'chargeVive-i', 'chargeViveNeige-i', 'subfloorThickness-i', 'hauteurMax-i', 'espacementPrefere-i'];
    inputsI.forEach(inputId => {
        const element = document.getElementById(inputId);
        if (element) {
            element.addEventListener('input', function() {
                clearTimeout(this.timer);
                this.timer = setTimeout(calculerPoutrellesI, 300);
            });
            element.addEventListener('change', calculerPoutrellesI);
        } else {
            console.warn(`Element ${inputId} non trouvé`);
        }
    });
    
    // Boutons radio pour les poutrelles en I
    document.querySelectorAll('input[name="subfloor-attachment-i"]').forEach(input => {
        input.addEventListener('change', calculerPoutrellesI);
    });
    document.querySelectorAll('input[name="span-type-i"]').forEach(input => {
        input.addEventListener('change', calculerPoutrellesI);
    });
    document.querySelectorAll('input[name="gypsum-i"]').forEach(input => {
        input.addEventListener('change', calculerPoutrellesI);
    });
    
    // Ajout des écouteurs d'événements pour les poutrelles ajourées
    const inputsA = ['porteePieds-a', 'porteePouces-a', 'chargeMorte-a', 'chargeVive-a', 'espacement-a', 'hauteurMax-a'];
    inputsA.forEach(inputId => {
        const element = document.getElementById(inputId);
        if (element) {
            element.addEventListener('input', function() {
                clearTimeout(this.timer);
                this.timer = setTimeout(calculerPoutrellesAjourees, 300);
            });
            element.addEventListener('change', calculerPoutrellesAjourees);
        } else {
            console.warn(`Element ${inputId} non trouvé`);
        }
    });
    
    // Ajout des écouteurs d'événements pour les solives CCQ
    const inputsCCQ = ['porteePieds-ccq', 'porteePouces-ccq', 'essence-ccq', 'qualite-ccq', 'dimensions-ccq', 'espacement-ccq', 'support-ccq'];
    inputsCCQ.forEach(inputId => {
        const element = document.getElementById(inputId);
        if (element) {
            element.addEventListener('input', function() {
                clearTimeout(this.timer);
                this.timer = setTimeout(calculerSolivesCCQ, 300);
            });
            element.addEventListener('change', calculerSolivesCCQ);
        } else {
            console.warn(`Element ${inputId} non trouvé`);
        }
    });
    
    // Boutons radio pour les solives CCQ
    document.querySelectorAll('input[name="special-ccq"]').forEach(input => {
        input.addEventListener('change', calculerSolivesCCQ);
    });
    
    // Appel initial pour tester
    calculerPoutrellesI();
});
