// Données des poutrelles en I basées sur les documents PDF
const iJoistData = {
    "AJS® 140": {
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
    },
    "AJS® 20": {
        heights: [9.5, 11.875, 14, 16],
        spans: {
            "5/8": {
                "nailed": {
                    "simple": {
                        "no_gypsum": {
                            9.5: {12: "15-4", 16: "14-4", 19.2: "13-9", 24: "n/d"},
                            11.875: {12: "17-4", 16: "16-2", 19.2: "15-6", 24: "n/d"},
                            14: {12: "19-1", 16: "17-7", 19.2: "16-10", 24: "n/d"},
                            16: {12: "20-10", 16: "19-1", 19.2: "18-1", 24: "n/d"}
                        },
                        "half_gypsum": {
                            9.5: {12: "15-9", 16: "14-8", 19.2: "14-1", 24: "n/d"},
                            11.875: {12: "17-9", 16: "16-6", 19.2: "15-10", 24: "n/d"},
                            14: {12: "19-8", 16: "18-1", 19.2: "17-4", 24: "n/d"},
                            16: {12: "21-6", 16: "19-8", 19.2: "18-8", 24: "n/d"}
                        }
                    }
                },
                "glued-nailed": {
                    "simple": {
                        "no_gypsum": {
                            9.5: {12: "16-3", 16: "15-4", 19.2: "14-10", 24: "n/d"},
                            11.875: {12: "18-3", 16: "17-2", 19.2: "16-7", 24: "n/d"},
                            14: {12: "20-3", 16: "18-10", 19.2: "18-0", 24: "n/d"},
                            16: {12: "22-1", 16: "20-6", 19.2: "19-7", 24: "n/d"}
                        },
                        "half_gypsum": {
                            9.5: {12: "16-8", 16: "15-9", 19.2: "15-2", 24: "n/d"},
                            11.875: {12: "18-10", 16: "17-8", 19.2: "17-0", 24: "n/d"},
                            14: {12: "21-0", 16: "19-6", 19.2: "18-8", 24: "n/d"},
                            16: {12: "22-10", 16: "21-3", 19.2: "20-4", 24: "n/d"}
                        }
                    }
                }
            },
            "3/4": {
                "nailed": {
                    "simple": {
                        "no_gypsum": {
                            9.5: {12: "16-1", 16: "15-0", 19.2: "14-4", 24: "13-7"},
                            11.875: {12: "18-1", 16: "16-10", 19.2: "16-1", 24: "15-4"},
                            14: {12: "20-2", 16: "18-5", 19.2: "17-7", 24: "16-9"},
                            16: {12: "22-1", 16: "20-2", 19.2: "19-0", 24: "17-11"}
                        },
                        "half_gypsum": {
                            9.5: {12: "16-5", 16: "15-3", 19.2: "14-8", 24: "13-11"},
                            11.875: {12: "18-7", 16: "17-3", 19.2: "16-6", 24: "15-8"},
                            14: {12: "20-9", 16: "19-0", 19.2: "18-0", 24: "17-1"},
                            16: {12: "22-8", 16: "20-9", 19.2: "19-8", 24: "18-5"}
                        }
                    }
                },
                "glued-nailed": {
                    "simple": {
                        "no_gypsum": {
                            9.5: {12: "17-3", 16: "16-3", 19.2: "15-8", 24: "15-0"},
                            11.875: {12: "19-7", 16: "18-2", 19.2: "17-6", 24: "16-10"},
                            14: {12: "21-10", 16: "20-2", 19.2: "19-3", 24: "18-3"},
                            16: {12: "23-9", 16: "22-0", 19.2: "20-11", 24: "19-10"}
                        },
                        "half_gypsum": {
                            9.5: {12: "17-7", 16: "16-7", 19.2: "16-0", 24: "15-4"},
                            11.875: {12: "20-2", 16: "18-9", 19.2: "17-11", 24: "17-3"},
                            14: {12: "22-5", 16: "20-10", 19.2: "19-11", 24: "18-11"},
                            16: {12: "24-5", 16: "22-9", 19.2: "21-8", 24: "20-7"}
                        }
                    }
                }
            }
        }
    },
    "AJS® 25": {
        heights: [9.5, 11.875, 14, 16, 18, 20, 22, 24],
        spans: {
            "5/8": {
                "nailed": {
                    "simple": {
                        "no_gypsum": {
                            9.5: {12: "16-5", 16: "15-4", 19.2: "14-9", 24: "n/d"},
                            11.875: {12: "18-8", 16: "17-3", 19.2: "16-7", 24: "n/d"},
                            14: {12: "20-9", 16: "19-0", 19.2: "18-0", 24: "n/d"},
                            16: {12: "22-8", 16: "20-8", 19.2: "19-8", 24: "n/d"},
                            18: {12: "24-9", 16: "22-7", 19.2: "21-5", 24: "n/d"},
                            20: {12: "26-6", 16: "24-2", 19.2: "22-11", 24: "n/d"},
                            22: {12: "28-2", 16: "25-9", 19.2: "24-5", 24: "n/d"},
                            24: {12: "29-9", 16: "27-2", 19.2: "25-10", 24: "n/d"}
                        },
                        "half_gypsum": {
                            9.5: {12: "16-10", 16: "15-8", 19.2: "15-0", 24: "n/d"},
                            11.875: {12: "19-2", 16: "17-8", 19.2: "16-11", 24: "n/d"},
                            14: {12: "21-4", 16: "19-6", 19.2: "18-6", 24: "n/d"},
                            16: {12: "23-4", 16: "21-4", 19.2: "20-3", 24: "n/d"},
                            18: {12: "25-5", 16: "23-3", 19.2: "22-1", 24: "n/d"},
                            20: {12: "27-2", 16: "24-11", 19.2: "23-8", 24: "n/d"},
                            22: {12: "28-11", 16: "26-6", 19.2: "25-2", 24: "n/d"},
                            24: {12: "30-7", 16: "28-1", 19.2: "26-8", 24: "n/d"}
                        }
                    }
                },
                "glued-nailed": {
                    "simple": {
                        "no_gypsum": {
                            9.5: {12: "17-3", 16: "16-2", 19.2: "15-8", 24: "n/d"},
                            11.875: {12: "19-8", 16: "18-2", 19.2: "17-6", 24: "n/d"},
                            14: {12: "21-10", 16: "20-2", 19.2: "19-3", 24: "n/d"},
                            16: {12: "23-9", 16: "21-11", 19.2: "21-0", 24: "n/d"},
                            18: {12: "25-10", 16: "23-10", 19.2: "22-9", 24: "n/d"},
                            20: {12: "27-7", 16: "25-6", 19.2: "24-4", 24: "n/d"},
                            22: {12: "29-4", 16: "27-1", 19.2: "25-10", 24: "n/d"},
                            24: {12: "31-0", 16: "28-7", 19.2: "27-4", 24: "n/d"}
                        },
                        "half_gypsum": {
                            9.5: {12: "17-7", 16: "16-7", 19.2: "16-0", 24: "n/d"},
                            11.875: {12: "20-2", 16: "18-8", 19.2: "17-11", 24: "n/d"},
                            14: {12: "22-6", 16: "20-10", 19.2: "19-10", 24: "n/d"},
                            16: {12: "24-6", 16: "22-8", 19.2: "21-8", 24: "n/d"},
                            18: {12: "26-7", 16: "24-7", 19.2: "23-6", 24: "n/d"},
                            20: {12: "28-5", 16: "26-4", 19.2: "25-2", 24: "n/d"},
                            22: {12: "30-2", 16: "27-11", 19.2: "26-8", 24: "n/d"},
                            24: {12: "31-11", 16: "29-7", 19.2: "28-3", 24: "n/d"}
                        }
                    }
                },
            },
            "3/4": {
                "nailed": {
                    "simple": {
                        "no_gypsum": {
                            9.5: {12: "17-2", 16: "16-0", 19.2: "15-4", 24: "14-7"},
                            11.875: {12: "19-9", 16: "18-0", 19.2: "17-3", 24: "16-5"},
                            14: {12: "22-0", 16: "20-1", 19.2: "19-0", 24: "17-10"},
                            16: {12: "24-0", 16: "21-11", 19.2: "20-8", 24: "19-5"},
                            18: {12: "26-2", 16: "23-11", 19.2: "22-7", 24: "21-2"},
                            20: {12: "28-0", 16: "25-7", 19.2: "24-2", 24: "22-8"},
                            22: {12: "29-9", 16: "27-2", 19.2: "25-8", 24: "24-1"},
                            24: {12: "31-6", 16: "28-9", 19.2: "27-2", 24: "25-6"}
                        },
                        "half_gypsum": {
                            9.5: {12: "17-6", 16: "16-4", 19.2: "15-7", 24: "14-10"},
                            11.875: {12: "20-2", 16: "18-5", 19.2: "17-7", 24: "16-9"},
                            14: {12: "22-6", 16: "20-7", 19.2: "19-6", 24: "18-3"},
                            16: {12: "24-7", 16: "22-6", 19.2: "21-3", 24: "19-11"},
                            18: {12: "26-9", 16: "24-6", 19.2: "23-2", 24: "21-9"},
                            20: {12: "28-7", 16: "26-3", 19.2: "24-10", 24: "23-4"},
                            22: {12: "30-5", 16: "27-11", 19.2: "26-5", 24: "24-10"},
                            24: {12: "32-2", 16: "29-7", 19.2: "28-0", 24: "26-3"}
                        }
                    }
                },
                "glued-nailed": {
                    "simple": {
                        "no_gypsum": {
                            9.5: {12: "18-3", 16: "17-2", 19.2: "16-6", 24: "15-10"},
                            11.875: {12: "21-1", 16: "19-6", 19.2: "18-7", 24: "17-8"},
                            14: {12: "23-5", 16: "21-8", 19.2: "20-7", 24: "19-6"},
                            16: {12: "25-6", 16: "23-6", 19.2: "22-5", 24: "21-2"},
                            18: {12: "27-7", 16: "25-6", 19.2: "24-4", 24: "23-0"},
                            20: {12: "29-6", 16: "27-3", 19.2: "26-0", 24: "24-7"},
                            22: {12: "31-4", 16: "29-0", 19.2: "27-7", 24: "26-1"},
                            24: {12: "33-4", 16: "30-7", 19.2: "29-1", 24: "27-6"}
                        },
                        "half_gypsum": {
                            9.5: {12: "18-8", 16: "17-6", 19.2: "16-10", 24: "16-2"},
                            11.875: {12: "21-7", 16: "20-0", 19.2: "19-1", 24: "18-1"},
                            14: {12: "24-0", 16: "22-3", 19.2: "21-2", 24: "20-1"},
                            16: {12: "26-1", 16: "24-2", 19.2: "23-1", 24: "21-10"},
                            18: {12: "28-4", 16: "26-3", 19.2: "25-0", 24: "23-8"},
                            20: {12: "30-3", 16: "28-1", 19.2: "26-9", 24: "25-4"},
                            22: {12: "32-2", 16: "29-10", 19.2: "28-5", 24: "26-11"},
                            24: {12: "34-5", 16: "31-6", 19.2: "30-0", 24: "28-5"}
                        }
                    }
                }
            }
        }
    }
};

// Données des poutrelles ajourées basées sur les documents PDF
const openWebJoistData = {
    "40_15": { // 40 lb/pi² live + 15 lb/pi² dead
        "2x3 - EPS": {
            11.875: {12: 19.33, 16: 16.58, 19.2: 15.08, 24: 13.25},
            12.5: {12: 19.92, 16: 17.08, 19.2: 15.5, 24: 13.67},
            14: {12: 21.17, 16: 18.25, 19.2: 16.5, 24: 14.58},
            16: {12: 22.83, 16: 19.58, 19.2: 17.75, 24: 15.58},
            18: {12: 0, 16: 0, 19.2: 0, 24: 0},
            20: {12: 0, 16: 0, 19.2: 0, 24: 0},
            22: {12: 0, 16: 0, 19.2: 0, 24: 0},
            24: {12: 0, 16: 0, 19.2: 0, 24: 0}
        },
        "2x3 - 1650": {
            11.875: {12: 21.5, 16: 19.67, 19.2: 17.83, 24: 15.67},
            12.5: {12: 22.17, 16: 20.25, 19.2: 18.33, 24: 16.17},
            14: {12: 23.83, 16: 21.5, 19.2: 19.58, 24: 17.25},
            16: {12: 25.83, 16: 23.17, 19.2: 21.0, 24: 18.58},
            18: {12: 0, 16: 0, 19.2: 0, 24: 0},
            20: {12: 0, 16: 0, 19.2: 0, 24: 0},
            22: {12: 0, 16: 0, 19.2: 0, 24: 0},
            24: {12: 0, 16: 0, 19.2: 0, 24: 0}
        },
        "2x3 - 2100": {
            11.875: {12: 22.33, 16: 20.83, 19.2: 19.83, 24: 18.33},
            12.5: {12: 23.08, 16: 21.5, 19.2: 20.58, 24: 19.08},
            14: {12: 24.75, 16: 23.17, 19.2: 22.08, 24: 20.83},
            16: {12: 26.83, 16: 25.17, 19.2: 24.0, 24: 22.58},
            18: {12: 0, 16: 0, 19.2: 0, 24: 0},
            20: {12: 0, 16: 0, 19.2: 0, 24: 0},
            22: {12: 0, 16: 0, 19.2: 0, 24: 0},
            24: {12: 0, 16: 0, 19.2: 0, 24: 0}
        },
        "2x4 - 2100": {
            11.875: {12: 24.08, 16: 22.42, 19.2: 21.33, 24: 20.17},
            12.5: {12: 24.83, 16: 23.17, 19.2: 22.08, 24: 20.83},
            14: {12: 26.58, 16: 24.92, 19.2: 23.75, 24: 22.33},
            16: {12: 28.83, 16: 26.92, 19.2: 25.75, 24: 24.25},
            18: {12: 31.0, 16: 29.0, 19.2: 27.67, 24: 26.0},
            20: {12: 32.5, 16: 30.5, 19.2: 29.08, 24: 27.42},
            22: {12: 35.08, 16: 32.25, 19.2: 30.92, 24: 29.08},
            24: {12: 37.5, 16: 34.5, 19.2: 32.5, 24: 30.75}
        },
        "2x4 - 2400": {
            11.875: {12: 24.67, 16: 23.0, 19.2: 21.92, 24: 20.67},
            12.5: {12: 25.5, 16: 23.75, 19.2: 22.67, 24: 21.25},
            14: {12: 27.25, 16: 25.5, 19.2: 24.33, 24: 22.83},
            16: {12: 29.5, 16: 27.58, 19.2: 26.33, 24: 24.83},
            18: {12: 31.67, 16: 29.67, 19.2: 28.33, 24: 26.67},
            20: {12: 34.08, 16: 31.58, 19.2: 30.25, 24: 28.5},
            22: {12: 36.58, 16: 33.67, 19.2: 31.92, 24: 30.17},
            24: {12: 39.17, 16: 36.08, 19.2: 34.0, 24: 31.75}
        }
    },
    "100_15": { // 100 lb/pi² live + 15 lb/pi² dead
        "2x3 - EPS": {
            11.875: {12: 13.17, 16: 10.5, 19.2: 8.92, 24: 6.75},
            12.5: {12: 13.58, 16: 10.75, 19.2: 9.17, 24: 7.0},
            14: {12: 14.42, 16: 11.5, 19.2: 9.75, 24: 7.42},
            16: {12: 15.58, 16: 12.42, 19.2: 10.42, 24: 8.0},
            18: {12: 0, 16: 0, 19.2: 0, 24: 0},
            20: {12: 0, 16: 0, 19.2: 0, 24: 0},
            22: {12: 0, 16: 0, 19.2: 0, 24: 0},
            24: {12: 0, 16: 0, 19.2: 0, 24: 0}
        },
        "2x3 - 1650": {
            11.875: {12: 15.58, 16: 13.33, 19.2: 11.83, 24: 9.58},
            12.5: {12: 15.92, 16: 13.75, 19.2: 12.17, 24: 9.83},
            14: {12: 17.0, 16: 14.67, 19.2: 13.0, 24: 10.42},
            16: {12: 18.33, 16: 15.75, 19.2: 14.0, 24: 11.25},
            18: {12: 0, 16: 0, 19.2: 0, 24: 0},
            20: {12: 0, 16: 0, 19.2: 0, 24: 0},
            22: {12: 0, 16: 0, 19.2: 0, 24: 0},
            24: {12: 0, 16: 0, 19.2: 0, 24: 0}
        },
        "2x3 - 2100": {
            11.875: {12: 16.75, 16: 15.17, 19.2: 13.5, 24: 11.25},
            12.5: {12: 17.42, 16: 15.75, 19.2: 13.92, 24: 11.58},
            14: {12: 19.17, 16: 16.83, 19.2: 14.83, 24: 12.33},
            16: {12: 21.17, 16: 18.17, 19.2: 15.83, 24: 13.25},
            18: {12: 0, 16: 0, 19.2: 0, 24: 0},
            20: {12: 0, 16: 0, 19.2: 0, 24: 0},
            22: {12: 0, 16: 0, 19.2: 0, 24: 0},
            24: {12: 0, 16: 0, 19.2: 0, 24: 0}
        },
        "2x4 - 2100": {
            11.875: {12: 18.67, 16: 16.58, 19.2: 14.42, 24: 11.83},
            12.5: {12: 19.42, 16: 17.08, 19.2: 14.92, 24: 12.17},
            14: {12: 21.25, 16: 18.17, 19.2: 15.83, 24: 13.0},
            16: {12: 23.58, 16: 19.58, 19.2: 17.0, 24: 14.0},
            18: {12: 25.5, 16: 20.83, 19.2: 18.17, 24: 15.0},
            20: {12: 26.92, 16: 22.08, 19.2: 19.25, 24: 15.75},
            22: {12: 28.33, 16: 23.25, 19.2: 20.33, 24: 16.67},
            24: {12: 29.75, 16: 24.42, 19.2: 21.17, 24: 17.42}
        },
        "2x4 - 2400": {
            11.875: {12: 19.33, 16: 17.33, 19.2: 15.5, 24: 12.92},
            12.5: {12: 20.17, 16: 18.08, 19.2: 16.17, 24: 13.33},
            14: {12: 22.0, 16: 19.42, 19.2: 17.0, 24: 14.25},
            16: {12: 24.42, 16: 20.83, 19.2: 18.33, 24: 15.33},
            18: {12: 26.67, 16: 22.25, 19.2: 19.5, 24: 16.25},
            20: {12: 28.42, 16: 23.58, 19.2: 20.75, 24: 17.25},
            22: {12: 30.0, 16: 24.83, 19.2: 21.75, 24: 18.17},
            24: {12: 31.33, 16: 26.0, 19.2: 22.83, 24: 19.08}
        }
    },
    "100_30": { // 100 lb/pi² live + 30 lb/pi² dead
        "2x3 - EPS": {
            11.875: {12: 11.75, 16: 9.25, 19.2: 7.83, 24: 5.92},
            12.5: {12: 12.17, 16: 9.58, 19.2: 8.08, 24: 6.17},
            14: {12: 12.92, 16: 10.17, 19.2: 8.58, 24: 6.50},
            16: {12: 13.92, 16: 10.92, 19.2: 9.17, 24: 7.00},
            18: {12: 0, 16: 0, 19.2: 0, 24: 0},
            20: {12: 0, 16: 0, 19.2: 0, 24: 0},
            22: {12: 0, 16: 0, 19.2: 0, 24: 0},
            24: {12: 0, 16: 0, 19.2: 0, 24: 0}
        },
        "2x3 - 1650": {
            11.875: {12: 14.25, 16: 12.08, 19.2: 10.67, 24: 8.58},
            12.5: {12: 14.58, 16: 12.42, 19.2: 10.92, 24: 8.83},
            14: {12: 15.58, 16: 13.25, 19.2: 11.67, 24: 9.33},
            16: {12: 16.75, 16: 14.17, 19.2: 12.50, 24: 10.08},
            18: {12: 0, 16: 0, 19.2: 0, 24: 0},
            20: {12: 0, 16: 0, 19.2: 0, 24: 0},
            22: {12: 0, 16: 0, 19.2: 0, 24: 0},
            24: {12: 0, 16: 0, 19.2: 0, 24: 0}
        },
        "2x3 - 2100": {
            11.875: {12: 15.50, 16: 13.92, 19.2: 12.25, 24: 10.08},
            12.5: {12: 16.08, 16: 14.42, 19.2: 12.67, 24: 10.42},
            14: {12: 17.58, 16: 15.33, 19.2: 13.50, 24: 11.08},
            16: {12: 19.42, 16: 16.50, 19.2: 14.42, 24: 11.92},
            18: {12: 0, 16: 0, 19.2: 0, 24: 0},
            20: {12: 0, 16: 0, 19.2: 0, 24: 0},
            22: {12: 0, 16: 0, 19.2: 0, 24: 0},
            24: {12: 0, 16: 0, 19.2: 0, 24: 0}
        },
        "2x4 - 2100": {
            11.875: {12: 17.33, 16: 15.08, 19.2: 12.92, 24: 10.50},
            12.5: {12: 18.00, 16: 15.58, 19.2: 13.33, 24: 10.83},
            14: {12: 19.75, 16: 16.58, 19.2: 14.25, 24: 11.58},
            16: {12: 21.92, 16: 17.83, 19.2: 15.33, 24: 12.50},
            18: {12: 23.75, 16: 18.92, 19.2: 16.33, 24: 13.33},
            20: {12: 25.17, 16: 20.00, 19.2: 17.25, 24: 14.08},
            22: {12: 26.42, 16: 21.08, 19.2: 18.17, 24: 14.83},
            24: {12: 27.75, 16: 22.17, 19.2: 19.00, 24: 15.58}
        },
        "2x4 - 2400": {
            11.875: {12: 18.00, 16: 15.75, 19.2: 13.92, 24: 11.50},
            12.5: {12: 18.75, 16: 16.42, 19.2: 14.50, 24: 11.92},
            14: {12: 20.50, 16: 17.67, 19.2: 15.25, 24: 12.75},
            16: {12: 22.75, 16: 18.92, 19.2: 16.42, 24: 13.67},
            18: {12: 24.83, 16: 20.17, 19.2: 17.50, 24: 14.50},
            20: {12: 26.50, 16: 21.42, 19.2: 18.58, 24: 15.42},
            22: {12: 28.00, 16: 22.58, 19.2: 19.50, 24: 16.25},
            24: {12: 29.33, 16: 23.67, 19.2: 20.42, 24: 17.08}
        }
    },
    "100_35": { // 100 lb/pi² live + 35 lb/pi² dead
        "2x3 - EPS": {
            11.875: {12: 11.08, 16: 8.67, 19.2: 7.33, 24: 5.50},
            12.5: {12: 11.50, 16: 8.92, 19.2: 7.58, 24: 5.75},
            14: {12: 12.25, 16: 9.58, 19.2: 8.08, 24: 6.08},
            16: {12: 13.17, 16: 10.25, 19.2: 8.58, 24: 6.50},
            18: {12: 0, 16: 0, 19.2: 0, 24: 0},
            20: {12: 0, 16: 0, 19.2: 0, 24: 0},
            22: {12: 0, 16: 0, 19.2: 0, 24: 0},
            24: {12: 0, 16: 0, 19.2: 0, 24: 0}
        },
        "2x3 - 1650": {
            11.875: {12: 13.42, 16: 11.33, 19.2: 10.00, 24: 8.00},
            12.5: {12: 13.75, 16: 11.67, 19.2: 10.25, 24: 8.25},
            14: {12: 14.67, 16: 12.42, 19.2: 10.92, 24: 8.75},
            16: {12: 15.75, 16: 13.25, 19.2: 11.67, 24: 9.42},
            18: {12: 0, 16: 0, 19.2: 0, 24: 0},
            20: {12: 0, 16: 0, 19.2: 0, 24: 0},
            22: {12: 0, 16: 0, 19.2: 0, 24: 0},
            24: {12: 0, 16: 0, 19.2: 0, 24: 0}
        },
        "2x3 - 2100": {
            11.875: {12: 14.58, 16: 13.08, 19.2: 11.50, 24: 9.42},
            12.5: {12: 15.17, 16: 13.58, 19.2: 11.92, 24: 9.75},
            14: {12: 16.58, 16: 14.42, 19.2: 12.67, 24: 10.33},
            16: {12: 18.33, 16: 15.50, 19.2: 13.50, 24: 11.17},
            18: {12: 0, 16: 0, 19.2: 0, 24: 0},
            20: {12: 0, 16: 0, 19.2: 0, 24: 0},
            22: {12: 0, 16: 0, 19.2: 0, 24: 0},
            24: {12: 0, 16: 0, 19.2: 0, 24: 0}
        },
        "2x4 - 2100": {
            11.875: {12: 16.25, 16: 14.17, 19.2: 12.08, 24: 9.83},
            12.5: {12: 16.92, 16: 14.67, 19.2: 12.50, 24: 10.17},
            14: {12: 18.58, 16: 15.58, 19.2: 13.33, 24: 10.83},
            16: {12: 20.58, 16: 16.75, 19.2: 14.33, 24: 11.67},
            18: {12: 22.33, 16: 17.75, 19.2: 15.25, 24: 12.42},
            20: {12: 23.67, 16: 18.75, 19.2: 16.17, 24: 13.17},
            22: {12: 24.92, 16: 19.75, 19.2: 17.00, 24: 13.92},
            24: {12: 26.17, 16: 20.75, 19.2: 17.83, 24: 14.58}
        },
        "2x4 - 2400": {
            11.875: {12: 16.92, 16: 14.83, 19.2: 13.08, 24: 10.75},
            12.5: {12: 17.67, 16: 15.42, 19.2: 13.58, 24: 11.17},
            14: {12: 19.33, 16: 16.58, 19.2: 14.33, 24: 11.92},
            16: {12: 21.42, 16: 17.75, 19.2: 15.42, 24: 12.83},
            18: {12: 23.33, 16: 18.92, 19.2: 16.42, 24: 13.67},
            20: {12: 24.92, 16: 20.08, 19.2: 17.42, 24: 14.50},
            22: {12: 26.33, 16: 21.17, 19.2: 18.33, 24: 15.25},
            24: {12: 27.67, 16: 22.25, 19.2: 19.17, 24: 16.00}
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

function showTab(tabName) {
    // Masquer tous les contenus d'onglets
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    
    // Retirer la classe active de tous les onglets
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Afficher le contenu de l'onglet sélectionné
    document.getElementById(tabName).classList.add('active');
    
    // Ajouter la classe active à l'onglet cliqué
    event.target.classList.add('active');
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
    
    const chargeMorte = parseFloat(document.getElementById('chargeMorte-i').value) || 0;
    const chargeVive = parseFloat(document.getElementById('chargeVive-i').value) || 0;
    const chargeViveNeige = parseFloat(document.getElementById('chargeViveNeige-i').value) || 0;
    const subfloorThickness = document.getElementById('subfloorThickness-i').value;
    const attachment = document.querySelector('input[name="subfloor-attachment-i"]:checked').value;
    const spanType = document.querySelector('input[name="span-type-i"]:checked').value;
    const gypsum = document.querySelector('input[name="gypsum-i"]:checked').value;
    const hauteurMax = parseFloat(document.getElementById('hauteurMax-i').value) || 999;
    const espacementPrefere = document.getElementById('espacementPrefere-i').value;

    // Validation des entrées
    if (!portee || !chargeMorte || !chargeVive) {
        resetResultsI();
        return;
    }

    // Calculs selon la méthodologie
    const chargeTotaleNonPonderee = chargeMorte + Math.max(chargeVive, chargeViveNeige);
    const chargeTotalePonderee = 1.25 * chargeMorte + 1.5 * Math.max(chargeVive, chargeViveNeige);

    // Affichage des résultats de calcul
    document.getElementById('resultTotaleNonPonderee-i').textContent = `${chargeTotaleNonPonderee.toFixed(0)} lb/pi.ca.`;
    document.getElementById('resultTotalePonderee-i').textContent = `${chargeTotalePonderee.toFixed(0)} lb/pi.ca.`;

    // Recherche des poutrelles viables
    const poutrellesViables = trouverPoutrellesViablesI(portee, subfloorThickness, attachment, spanType, gypsum, hauteurMax, espacementPrefere);
    
    afficherResultatsPoutrellesI(poutrellesViables, chargeTotaleNonPonderee, chargeTotalePonderee);
}

function trouverPoutrellesViablesI(portee, subfloorThickness, attachment, spanType, gypsum, hauteurMax, espacementPrefere) {
    const poutrellesViables = [];
    
    // Vérifier toutes les séries
    for (const [seriesName, seriesData] of Object.entries(iJoistData)) {
        if (seriesData.spans[subfloorThickness] && seriesData.spans[subfloorThickness][attachment]) {
            const spanTypeData = seriesData.spans[subfloorThickness][attachment][spanType];
            if (!spanTypeData) continue;
            
            const gypsumData = spanTypeData[gypsum === "no" ? "no_gypsum" : "half_gypsum"];
            if (!gypsumData) continue;
            
            for (const height of seriesData.heights) {
                if (height > hauteurMax) continue;
                
                const heightData = gypsumData[height];
                if (!heightData) continue;
                
                const spacings = espacementPrefere ? [parseFloat(espacementPrefere)] : [12, 16, 19.2, 24];
                
                for (const spacing of spacings) {
                    const spanStr = heightData[spacing];
                    if (!spanStr || spanStr === "n/d") continue;
                    
                    const allowableSpan = parseSpan(spanStr);
                    
                    if (allowableSpan >= portee) {
                        poutrellesViables.push({
                            series: seriesName,
                            height: height,
                            spacing: spacing,
                            maxSpan: spanStr,
                            allowableSpanFt: allowableSpan,
                            ratio: allowableSpan / portee
                        });
                    }
                }
            }
        }
    }
    
    // Trier par ratio (le plus élevé en premier), puis par espacement (le plus grand en premier)
    poutrellesViables.sort((a, b) => {
        if (Math.abs(a.ratio - b.ratio) < 0.01) {
            return b.spacing - a.spacing;
        }
        return b.ratio - a.ratio;
    });
    
    return poutrellesViables;
}

function afficherResultatsPoutrellesI(poutrellesViables, chargeTotaleNonPonderee, chargeTotalePonderee) {
    const container = document.getElementById('poutrelleResults-i');
    
    if (poutrellesViables.length === 0) {
        container.innerHTML = `
            <div class="no-solution">
                <h3>Aucune poutrelle viable trouvée</h3>
                <p>Les paramètres entrés ne permettent pas de trouver une solution viable.</p>
                <p>Suggestions :</p>
                <ul style="text-align: left; margin-top: 10px;">
                    <li>Augmenter la hauteur maximale</li>
                    <li>Réduire la portée</li>
                    <li>Considérer des appuis intermédiaires</li>
                </ul>
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
    if (!portee || !chargeMorte || !chargeVive || !espacement) {
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
                <p>Les charges ${chargeVive} lb/pi² (CV) + ${chargeMorte} lb/pi² (CM) ne sont pas dans les tables disponibles.</p>
            </div>
        `;
        return;
    }

    // Recherche des poutrelles viables
    const poutrellesViables = trouverPoutrellesViablesA(data, portee, espacement, hauteurMax);
    afficherResultatsPoutrellesA(poutrellesViables, chargeMorte, chargeVive, portee, espacement);
}

function trouverPoutrellesViablesA(data, portee, espacement, hauteurMax) {
    const poutrellesViables = [];
    
    // Vérifier toutes les séries et hauteurs
    for (const [series, heightData] of Object.entries(data)) {
        for (const [heightStr, spacingData] of Object.entries(heightData)) {
            const height = parseFloat(heightStr);
            if (height > hauteurMax) continue;
            
            const allowableSpan = spacingData[espacement];
            if (allowableSpan && allowableSpan > 0) {
                const ratio = allowableSpan / portee;
                poutrellesViables.push({
                    series: series,
                    height: height,
                    allowableSpan: allowableSpan,
                    ratio: ratio
                });
            }
        }
    }
    
    // Trier par ratio (le plus élevé en premier)
    poutrellesViables.sort((a, b) => b.ratio - a.ratio);
    
    return poutrellesViables;
}

function afficherResultatsPoutrellesA(poutrellesViables, chargeMorte, chargeVive, portee, espacement) {
    const container = document.getElementById('poutrelleResults-a');
    const statusBox = document.getElementById('status-box-a');
    const statusElement = document.getElementById('resultStatut-a');
    
    if (poutrellesViables.length === 0) {
        statusElement.textContent = 'NON CONFORME';
        statusBox.className = 'result-card status-error';
        container.innerHTML = `
            <div class="no-solution">
                <h3>Aucune solution trouvée</h3>
                <p>Aucune poutrelle ajourée ne peut supporter cette portée avec ces charges.</p>
            </div>
        `;
        return;
    }

    const bestOption = poutrellesViables[0];
    
    if (bestOption.ratio >= 1.0) {
        statusElement.textContent = 'CONFORME';
        statusBox.className = 'result-card status-success';
    } else {
        statusElement.textContent = 'NON CONFORME';
        statusBox.className = 'result-card status-error';
    }

    let html = `
        <div class="poutrelle-options">
            <h3 style="margin-bottom: 20px; color: #D2691E;">
                Poutrelles ajourées viables (${poutrellesViables.length} option${poutrellesViables.length > 1 ? 's' : ''})
            </h3>
    `;

    poutrellesViables.forEach((poutrelle, index) => {
        const utilizationPercent = ((1 / poutrelle.ratio) * 100).toFixed(0);
        const statusClass = poutrelle.ratio >= 1.0 ? 'status-success' : 'status-error';
        
        html += `
            <div class="poutrelle-option ${statusClass}" onclick="selectionnerPoutrelle(${index}, 'a')">
                <div class="poutrelle-title">
                    ${poutrelle.series} - ${poutrelle.height}" @ ${espacement}" c/c
                </div>
                <div class="poutrelle-specs">
                    <div><strong>Portée admissible:</strong> ${formatSpan(poutrelle.allowableSpan)}</div>
                    <div><strong>Ratio:</strong> ${poutrelle.ratio.toFixed(2)}</div>
                    <div><strong>Utilisation:</strong> ${utilizationPercent}%</div>
                    <div><strong>Statut:</strong> ${poutrelle.ratio >= 1.0 ? 'Conforme' : 'Non conforme'}</div>
                </div>
            </div>
        `;
    });

    html += `
        <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 8px; font-size: 0.9em;">
            <strong>Paramètres de conception:</strong><br>
            Portée demandée: ${formatSpan(portee)} | 
            Charges: ${chargeMorte} + ${chargeVive} lb/pi.ca. | 
            Espacement: ${espacement}"
        </div>
    `;

    html += '</div>';
    container.innerHTML = html;
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
    // Ajout des écouteurs d'événements pour les poutrelles en I
    const inputsI = ['porteePieds-i', 'porteePouces-i', 'chargeMorte-i', 'chargeVive-i', 'chargeViveNeige-i', 'subfloorThickness-i', 'hauteurMax-i', 'espacementPrefere-i'];
    inputsI.forEach(inputId => {
        const element = document.getElementById(inputId);
        if (element) {
            element.addEventListener('input', function() {
                clearTimeout(this.timer);
                this.timer = setTimeout(calculerPoutrellesI, 500);
            });
            element.addEventListener('change', calculerPoutrellesI);
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
                this.timer = setTimeout(calculerPoutrellesAjourees, 500);
            });
            element.addEventListener('change', calculerPoutrellesAjourees);
        }
    });
});