[
    {
        "type": "namespace",
        "name": "Ansi",
        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
        "line": 3,
        "char": 5
    },
    {
        "type": "class",
        "name": "Output",
        "abstract": 0,
        "final": 0,
        "definition": {
            "properties": [
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "prefix",
                    "default": {
                        "type": "empty-array",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 72,
                        "char": 26
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 73,
                    "char": 13
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "suffix",
                    "default": {
                        "type": "empty-array",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 73,
                        "char": 26
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 76,
                    "char": 7
                }
            ],
            "methods": [
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "__construct",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "fg",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                "line": 76,
                                "char": 43
                            },
                            "reference": 0,
                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                            "line": 76,
                            "char": 43
                        },
                        {
                            "type": "parameter",
                            "name": "bg",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                "line": 76,
                                "char": 58
                            },
                            "reference": 0,
                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                            "line": 76,
                            "char": 58
                        },
                        {
                            "type": "parameter",
                            "name": "underline",
                            "const": 0,
                            "data-type": "bool",
                            "mandatory": 0,
                            "default": {
                                "type": "bool",
                                "value": "false",
                                "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                "line": 76,
                                "char": 85
                            },
                            "reference": 0,
                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                            "line": 76,
                            "char": 85
                        },
                        {
                            "type": "parameter",
                            "name": "bold",
                            "const": 0,
                            "data-type": "bool",
                            "mandatory": 0,
                            "default": {
                                "type": "bool",
                                "value": "false",
                                "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                "line": 76,
                                "char": 107
                            },
                            "reference": 0,
                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                            "line": 76,
                            "char": 107
                        },
                        {
                            "type": "parameter",
                            "name": "italic",
                            "const": 0,
                            "data-type": "bool",
                            "mandatory": 0,
                            "default": {
                                "type": "bool",
                                "value": "false",
                                "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                "line": 76,
                                "char": 131
                            },
                            "reference": 0,
                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                            "line": 76,
                            "char": 131
                        },
                        {
                            "type": "parameter",
                            "name": "blink",
                            "const": 0,
                            "data-type": "bool",
                            "mandatory": 0,
                            "default": {
                                "type": "bool",
                                "value": "false",
                                "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                "line": 76,
                                "char": 154
                            },
                            "reference": 0,
                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                            "line": 76,
                            "char": 154
                        }
                    ],
                    "statements": [
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property-append",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "prefix",
                                    "expr": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "Output",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 78,
                                            "char": 46
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "ANSI_END",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 78,
                                            "char": 46
                                        },
                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                        "line": 78,
                                        "char": 46
                                    },
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 78,
                                    "char": 46
                                }
                            ],
                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                            "line": 79,
                            "char": 12
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 79,
                                    "char": 14
                                },
                                "name": "setFg",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "fg",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 79,
                                            "char": 23
                                        },
                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                        "line": 79,
                                        "char": 23
                                    }
                                ],
                                "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                "line": 79,
                                "char": 24
                            },
                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                            "line": 80,
                            "char": 12
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 80,
                                    "char": 14
                                },
                                "name": "setBg",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "bg",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 80,
                                            "char": 23
                                        },
                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                        "line": 80,
                                        "char": 23
                                    }
                                ],
                                "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                "line": 80,
                                "char": 24
                            },
                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                            "line": 81,
                            "char": 7
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "variable",
                                "value": "bold",
                                "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                "line": 81,
                                "char": 14
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "object-property-append",
                                            "operator": "assign",
                                            "variable": "this",
                                            "property": "prefix",
                                            "expr": {
                                                "type": "static-constant-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "Output",
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 82,
                                                    "char": 51
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "ANSI_BOLD",
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 82,
                                                    "char": 51
                                                },
                                                "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                "line": 82,
                                                "char": 51
                                            },
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 82,
                                            "char": 51
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 83,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                            "line": 84,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "variable",
                                "value": "italic",
                                "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                "line": 84,
                                "char": 19
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "object-property-append",
                                            "operator": "assign",
                                            "variable": "this",
                                            "property": "prefix",
                                            "expr": {
                                                "type": "static-constant-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "Output",
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 85,
                                                    "char": 53
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "ANSI_ITALIC",
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 85,
                                                    "char": 53
                                                },
                                                "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                "line": 85,
                                                "char": 53
                                            },
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 85,
                                            "char": 53
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 86,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                            "line": 87,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "variable",
                                "value": "underline",
                                "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                "line": 87,
                                "char": 22
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "object-property-append",
                                            "operator": "assign",
                                            "variable": "this",
                                            "property": "prefix",
                                            "expr": {
                                                "type": "static-constant-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "Output",
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 88,
                                                    "char": 56
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "ANSI_UNDERLINE",
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 88,
                                                    "char": 56
                                                },
                                                "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                "line": 88,
                                                "char": 56
                                            },
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 88,
                                            "char": 56
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 89,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                            "line": 90,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "variable",
                                "value": "blink",
                                "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                "line": 90,
                                "char": 18
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "object-property-append",
                                            "operator": "assign",
                                            "variable": "this",
                                            "property": "prefix",
                                            "expr": {
                                                "type": "static-constant-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "Output",
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 91,
                                                    "char": 52
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "ANSI_BLINK",
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 91,
                                                    "char": 52
                                                },
                                                "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                "line": 91,
                                                "char": 52
                                            },
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 91,
                                            "char": 52
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 92,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                            "line": 93,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property-append",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "suffix",
                                    "expr": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "Output",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 93,
                                            "char": 46
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "ANSI_END",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 93,
                                            "char": 46
                                        },
                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                        "line": 93,
                                        "char": 46
                                    },
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 93,
                                    "char": 46
                                }
                            ],
                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                            "line": 94,
                            "char": 5
                        }
                    ],
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 76,
                    "last-line": 96,
                    "char": 16
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "method",
                    "name": "log",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "str",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                            "line": 96,
                            "char": 35
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 97,
                        "char": 5
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 96,
                    "last-line": 101,
                    "char": 22
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "method",
                    "name": "setFg",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "fg",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                            "line": 101,
                            "char": 36
                        }
                    ],
                    "statements": [
                        {
                            "type": "switch",
                            "expr": {
                                "type": "variable",
                                "value": "fg",
                                "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                "line": 103,
                                "char": 19
                            },
                            "clauses": [
                                {
                                    "type": "case",
                                    "expr": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "Output",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 105,
                                            "char": 39
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "FG_WHITE_TYPE",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 105,
                                            "char": 39
                                        },
                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                        "line": 105,
                                        "char": 39
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "object-property-append",
                                                    "operator": "assign",
                                                    "variable": "this",
                                                    "property": "prefix",
                                                    "expr": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "Output",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 106,
                                                            "char": 54
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "FG_WHITE",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 106,
                                                            "char": 54
                                                        },
                                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                        "line": 106,
                                                        "char": 54
                                                    },
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 106,
                                                    "char": 54
                                                }
                                            ],
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 107,
                                            "char": 21
                                        },
                                        {
                                            "type": "break",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 108,
                                            "char": 16
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 108,
                                    "char": 16
                                },
                                {
                                    "type": "case",
                                    "expr": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "Output",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 108,
                                            "char": 40
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "FG_YELLOW_TYPE",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 108,
                                            "char": 40
                                        },
                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                        "line": 108,
                                        "char": 40
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "object-property-append",
                                                    "operator": "assign",
                                                    "variable": "this",
                                                    "property": "prefix",
                                                    "expr": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "Output",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 109,
                                                            "char": 55
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "FG_YELLOW",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 109,
                                                            "char": 55
                                                        },
                                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                        "line": 109,
                                                        "char": 55
                                                    },
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 109,
                                                    "char": 55
                                                }
                                            ],
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 110,
                                            "char": 21
                                        },
                                        {
                                            "type": "break",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 111,
                                            "char": 16
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 111,
                                    "char": 16
                                },
                                {
                                    "type": "case",
                                    "expr": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "Output",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 111,
                                            "char": 39
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "FG_BROWN_TYPE",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 111,
                                            "char": 39
                                        },
                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                        "line": 111,
                                        "char": 39
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "object-property-append",
                                                    "operator": "assign",
                                                    "variable": "this",
                                                    "property": "prefix",
                                                    "expr": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "Output",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 112,
                                                            "char": 54
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "FG_BROWN",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 112,
                                                            "char": 54
                                                        },
                                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                        "line": 112,
                                                        "char": 54
                                                    },
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 112,
                                                    "char": 54
                                                }
                                            ],
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 113,
                                            "char": 21
                                        },
                                        {
                                            "type": "break",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 114,
                                            "char": 16
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 114,
                                    "char": 16
                                },
                                {
                                    "type": "case",
                                    "expr": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "Output",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 114,
                                            "char": 40
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "FG_PURPLE_TYPE",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 114,
                                            "char": 40
                                        },
                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                        "line": 114,
                                        "char": 40
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "object-property-append",
                                                    "operator": "assign",
                                                    "variable": "this",
                                                    "property": "prefix",
                                                    "expr": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "Output",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 115,
                                                            "char": 55
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "FG_PURPLE",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 115,
                                                            "char": 55
                                                        },
                                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                        "line": 115,
                                                        "char": 55
                                                    },
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 115,
                                                    "char": 55
                                                }
                                            ],
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 116,
                                            "char": 21
                                        },
                                        {
                                            "type": "break",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 117,
                                            "char": 16
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 117,
                                    "char": 16
                                },
                                {
                                    "type": "case",
                                    "expr": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "Output",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 117,
                                            "char": 37
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "FG_RED_TYPE",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 117,
                                            "char": 37
                                        },
                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                        "line": 117,
                                        "char": 37
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "object-property-append",
                                                    "operator": "assign",
                                                    "variable": "this",
                                                    "property": "prefix",
                                                    "expr": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "Output",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 118,
                                                            "char": 52
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "FG_RED",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 118,
                                                            "char": 52
                                                        },
                                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                        "line": 118,
                                                        "char": 52
                                                    },
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 118,
                                                    "char": 52
                                                }
                                            ],
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 119,
                                            "char": 21
                                        },
                                        {
                                            "type": "break",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 120,
                                            "char": 16
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 120,
                                    "char": 16
                                },
                                {
                                    "type": "case",
                                    "expr": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "Output",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 120,
                                            "char": 38
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "FG_CYAN_TYPE",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 120,
                                            "char": 38
                                        },
                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                        "line": 120,
                                        "char": 38
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "object-property-append",
                                                    "operator": "assign",
                                                    "variable": "this",
                                                    "property": "prefix",
                                                    "expr": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "Output",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 121,
                                                            "char": 53
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "FG_CYAN",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 121,
                                                            "char": 53
                                                        },
                                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                        "line": 121,
                                                        "char": 53
                                                    },
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 121,
                                                    "char": 53
                                                }
                                            ],
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 122,
                                            "char": 21
                                        },
                                        {
                                            "type": "break",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 123,
                                            "char": 16
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 123,
                                    "char": 16
                                },
                                {
                                    "type": "case",
                                    "expr": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "Output",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 123,
                                            "char": 39
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "FG_GREEN_TYPE",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 123,
                                            "char": 39
                                        },
                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                        "line": 123,
                                        "char": 39
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "object-property-append",
                                                    "operator": "assign",
                                                    "variable": "this",
                                                    "property": "prefix",
                                                    "expr": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "Output",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 124,
                                                            "char": 54
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "FG_GREEN",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 124,
                                                            "char": 54
                                                        },
                                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                        "line": 124,
                                                        "char": 54
                                                    },
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 124,
                                                    "char": 54
                                                }
                                            ],
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 125,
                                            "char": 21
                                        },
                                        {
                                            "type": "break",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 126,
                                            "char": 16
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 126,
                                    "char": 16
                                },
                                {
                                    "type": "case",
                                    "expr": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "Output",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 126,
                                            "char": 38
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "FG_BLUE_TYPE",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 126,
                                            "char": 38
                                        },
                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                        "line": 126,
                                        "char": 38
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "object-property-append",
                                                    "operator": "assign",
                                                    "variable": "this",
                                                    "property": "prefix",
                                                    "expr": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "Output",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 127,
                                                            "char": 53
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "FG_BLUE",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 127,
                                                            "char": 53
                                                        },
                                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                        "line": 127,
                                                        "char": 53
                                                    },
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 127,
                                                    "char": 53
                                                }
                                            ],
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 128,
                                            "char": 21
                                        },
                                        {
                                            "type": "break",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 129,
                                            "char": 16
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 129,
                                    "char": 16
                                },
                                {
                                    "type": "case",
                                    "expr": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "Output",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 129,
                                            "char": 39
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "FG_BLACK_TYPE",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 129,
                                            "char": 39
                                        },
                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                        "line": 129,
                                        "char": 39
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "object-property-append",
                                                    "operator": "assign",
                                                    "variable": "this",
                                                    "property": "prefix",
                                                    "expr": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "Output",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 130,
                                                            "char": 54
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "FG_BLACK",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 130,
                                                            "char": 54
                                                        },
                                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                        "line": 130,
                                                        "char": 54
                                                    },
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 130,
                                                    "char": 54
                                                }
                                            ],
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 131,
                                            "char": 21
                                        },
                                        {
                                            "type": "break",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 132,
                                            "char": 16
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 132,
                                    "char": 16
                                },
                                {
                                    "type": "case",
                                    "expr": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "Output",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 132,
                                            "char": 44
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "FG_LIGHT_GREY_TYPE",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 132,
                                            "char": 44
                                        },
                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                        "line": 132,
                                        "char": 44
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "object-property-append",
                                                    "operator": "assign",
                                                    "variable": "this",
                                                    "property": "prefix",
                                                    "expr": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "Output",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 133,
                                                            "char": 59
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "FG_LIGHT_GREY",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 133,
                                                            "char": 59
                                                        },
                                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                        "line": 133,
                                                        "char": 59
                                                    },
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 133,
                                                    "char": 59
                                                }
                                            ],
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 134,
                                            "char": 21
                                        },
                                        {
                                            "type": "break",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 135,
                                            "char": 16
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 135,
                                    "char": 16
                                },
                                {
                                    "type": "case",
                                    "expr": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "Output",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 135,
                                            "char": 46
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "FG_LIGHT_PURPLE_TYPE",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 135,
                                            "char": 46
                                        },
                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                        "line": 135,
                                        "char": 46
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "object-property-append",
                                                    "operator": "assign",
                                                    "variable": "this",
                                                    "property": "prefix",
                                                    "expr": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "Output",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 136,
                                                            "char": 61
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "FG_LIGHT_PURPLE",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 136,
                                                            "char": 61
                                                        },
                                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                        "line": 136,
                                                        "char": 61
                                                    },
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 136,
                                                    "char": 61
                                                }
                                            ],
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 137,
                                            "char": 21
                                        },
                                        {
                                            "type": "break",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 138,
                                            "char": 16
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 138,
                                    "char": 16
                                },
                                {
                                    "type": "case",
                                    "expr": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "Output",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 138,
                                            "char": 43
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "FG_LIGHT_RED_TYPE",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 138,
                                            "char": 43
                                        },
                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                        "line": 138,
                                        "char": 43
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "object-property-append",
                                                    "operator": "assign",
                                                    "variable": "this",
                                                    "property": "prefix",
                                                    "expr": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "Output",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 139,
                                                            "char": 58
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "FG_LIGHT_RED",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 139,
                                                            "char": 58
                                                        },
                                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                        "line": 139,
                                                        "char": 58
                                                    },
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 139,
                                                    "char": 58
                                                }
                                            ],
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 140,
                                            "char": 21
                                        },
                                        {
                                            "type": "break",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 141,
                                            "char": 16
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 141,
                                    "char": 16
                                },
                                {
                                    "type": "case",
                                    "expr": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "Output",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 141,
                                            "char": 44
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "FG_LIGHT_CYAN_TYPE",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 141,
                                            "char": 44
                                        },
                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                        "line": 141,
                                        "char": 44
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "object-property-append",
                                                    "operator": "assign",
                                                    "variable": "this",
                                                    "property": "prefix",
                                                    "expr": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "Output",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 142,
                                                            "char": 59
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "FG_LIGHT_CYAN",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 142,
                                                            "char": 59
                                                        },
                                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                        "line": 142,
                                                        "char": 59
                                                    },
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 142,
                                                    "char": 59
                                                }
                                            ],
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 143,
                                            "char": 21
                                        },
                                        {
                                            "type": "break",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 144,
                                            "char": 16
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 144,
                                    "char": 16
                                },
                                {
                                    "type": "case",
                                    "expr": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "Output",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 144,
                                            "char": 45
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "FG_LIGHT_GREEN_TYPE",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 144,
                                            "char": 45
                                        },
                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                        "line": 144,
                                        "char": 45
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "object-property-append",
                                                    "operator": "assign",
                                                    "variable": "this",
                                                    "property": "prefix",
                                                    "expr": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "Output",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 145,
                                                            "char": 60
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "FG_LIGHT_GREEN",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 145,
                                                            "char": 60
                                                        },
                                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                        "line": 145,
                                                        "char": 60
                                                    },
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 145,
                                                    "char": 60
                                                }
                                            ],
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 146,
                                            "char": 21
                                        },
                                        {
                                            "type": "break",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 147,
                                            "char": 16
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 147,
                                    "char": 16
                                },
                                {
                                    "type": "case",
                                    "expr": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "Output",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 147,
                                            "char": 44
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "FG_LIGHT_BLUE_TYPE",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 147,
                                            "char": 44
                                        },
                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                        "line": 147,
                                        "char": 44
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "object-property-append",
                                                    "operator": "assign",
                                                    "variable": "this",
                                                    "property": "prefix",
                                                    "expr": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "Output",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 148,
                                                            "char": 59
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "FG_LIGHT_BLUE",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 148,
                                                            "char": 59
                                                        },
                                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                        "line": 148,
                                                        "char": 59
                                                    },
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 148,
                                                    "char": 59
                                                }
                                            ],
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 149,
                                            "char": 21
                                        },
                                        {
                                            "type": "break",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 150,
                                            "char": 16
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 150,
                                    "char": 16
                                },
                                {
                                    "type": "case",
                                    "expr": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "Output",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 150,
                                            "char": 43
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "FG_DARK_GREY_TYPE",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 150,
                                            "char": 43
                                        },
                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                        "line": 150,
                                        "char": 43
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "object-property-append",
                                                    "operator": "assign",
                                                    "variable": "this",
                                                    "property": "prefix",
                                                    "expr": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "Output",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 151,
                                                            "char": 58
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "FG_DARK_GREY",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 151,
                                                            "char": 58
                                                        },
                                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                        "line": 151,
                                                        "char": 58
                                                    },
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 151,
                                                    "char": 58
                                                }
                                            ],
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 152,
                                            "char": 21
                                        },
                                        {
                                            "type": "break",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 153,
                                            "char": 19
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 153,
                                    "char": 19
                                },
                                {
                                    "type": "default",
                                    "statements": [
                                        {
                                            "type": "break",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 155,
                                            "char": 9
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 155,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                            "line": 156,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 102,
                        "char": 5
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 101,
                    "last-line": 158,
                    "char": 22
                },
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "method",
                    "name": "setBg",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "bg",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                            "line": 158,
                            "char": 36
                        }
                    ],
                    "statements": [
                        {
                            "type": "switch",
                            "expr": {
                                "type": "variable",
                                "value": "bg",
                                "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                "line": 160,
                                "char": 19
                            },
                            "clauses": [
                                {
                                    "type": "case",
                                    "expr": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "Output",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 161,
                                            "char": 38
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "BG_CYAN_TYPE",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 161,
                                            "char": 38
                                        },
                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                        "line": 161,
                                        "char": 38
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "object-property-append",
                                                    "operator": "assign",
                                                    "variable": "this",
                                                    "property": "prefix",
                                                    "expr": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "Output",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 162,
                                                            "char": 53
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "BG_CYAN",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 162,
                                                            "char": 53
                                                        },
                                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                        "line": 162,
                                                        "char": 53
                                                    },
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 162,
                                                    "char": 53
                                                }
                                            ],
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 163,
                                            "char": 21
                                        },
                                        {
                                            "type": "break",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 164,
                                            "char": 16
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 164,
                                    "char": 16
                                },
                                {
                                    "type": "case",
                                    "expr": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "Output",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 164,
                                            "char": 41
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "BG_MAGENTA_TYPE",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 164,
                                            "char": 41
                                        },
                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                        "line": 164,
                                        "char": 41
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "object-property-append",
                                                    "operator": "assign",
                                                    "variable": "this",
                                                    "property": "prefix",
                                                    "expr": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "Output",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 165,
                                                            "char": 56
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "BG_MAGENTA",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 165,
                                                            "char": 56
                                                        },
                                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                        "line": 165,
                                                        "char": 56
                                                    },
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 165,
                                                    "char": 56
                                                }
                                            ],
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 166,
                                            "char": 21
                                        },
                                        {
                                            "type": "break",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 167,
                                            "char": 16
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 167,
                                    "char": 16
                                },
                                {
                                    "type": "case",
                                    "expr": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "Output",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 167,
                                            "char": 38
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "BG_BLUE_TYPE",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 167,
                                            "char": 38
                                        },
                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                        "line": 167,
                                        "char": 38
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "object-property-append",
                                                    "operator": "assign",
                                                    "variable": "this",
                                                    "property": "prefix",
                                                    "expr": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "Output",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 168,
                                                            "char": 53
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "BG_BLUE",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 168,
                                                            "char": 53
                                                        },
                                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                        "line": 168,
                                                        "char": 53
                                                    },
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 168,
                                                    "char": 53
                                                }
                                            ],
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 169,
                                            "char": 21
                                        },
                                        {
                                            "type": "break",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 170,
                                            "char": 16
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 170,
                                    "char": 16
                                },
                                {
                                    "type": "case",
                                    "expr": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "Output",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 170,
                                            "char": 40
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "BG_YELLOW_TYPE",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 170,
                                            "char": 40
                                        },
                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                        "line": 170,
                                        "char": 40
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "object-property-append",
                                                    "operator": "assign",
                                                    "variable": "this",
                                                    "property": "prefix",
                                                    "expr": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "Output",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 171,
                                                            "char": 55
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "BG_YELLOW",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 171,
                                                            "char": 55
                                                        },
                                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                        "line": 171,
                                                        "char": 55
                                                    },
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 171,
                                                    "char": 55
                                                }
                                            ],
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 172,
                                            "char": 21
                                        },
                                        {
                                            "type": "break",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 173,
                                            "char": 16
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 173,
                                    "char": 16
                                },
                                {
                                    "type": "case",
                                    "expr": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "Output",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 173,
                                            "char": 39
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "BG_GREEN_TYPE",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 173,
                                            "char": 39
                                        },
                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                        "line": 173,
                                        "char": 39
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "object-property-append",
                                                    "operator": "assign",
                                                    "variable": "this",
                                                    "property": "prefix",
                                                    "expr": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "Output",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 174,
                                                            "char": 54
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "BG_GREEN",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 174,
                                                            "char": 54
                                                        },
                                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                        "line": 174,
                                                        "char": 54
                                                    },
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 174,
                                                    "char": 54
                                                }
                                            ],
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 175,
                                            "char": 21
                                        },
                                        {
                                            "type": "break",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 176,
                                            "char": 16
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 176,
                                    "char": 16
                                },
                                {
                                    "type": "case",
                                    "expr": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "Output",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 176,
                                            "char": 37
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "BG_RED_TYPE",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 176,
                                            "char": 37
                                        },
                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                        "line": 176,
                                        "char": 37
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "object-property-append",
                                                    "operator": "assign",
                                                    "variable": "this",
                                                    "property": "prefix",
                                                    "expr": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "Output",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 177,
                                                            "char": 52
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "BG_RED",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 177,
                                                            "char": 52
                                                        },
                                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                        "line": 177,
                                                        "char": 52
                                                    },
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 177,
                                                    "char": 52
                                                }
                                            ],
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 178,
                                            "char": 21
                                        },
                                        {
                                            "type": "break",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 179,
                                            "char": 16
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 179,
                                    "char": 16
                                },
                                {
                                    "type": "case",
                                    "expr": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "Output",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 179,
                                            "char": 39
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "BG_BLACK_TYPE",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 179,
                                            "char": 39
                                        },
                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                        "line": 179,
                                        "char": 39
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "object-property-append",
                                                    "operator": "assign",
                                                    "variable": "this",
                                                    "property": "prefix",
                                                    "expr": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "Output",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 180,
                                                            "char": 54
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "BG_BLACK",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 180,
                                                            "char": 54
                                                        },
                                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                        "line": 180,
                                                        "char": 54
                                                    },
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 180,
                                                    "char": 54
                                                }
                                            ],
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 181,
                                            "char": 21
                                        },
                                        {
                                            "type": "break",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 182,
                                            "char": 16
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 182,
                                    "char": 16
                                },
                                {
                                    "type": "case",
                                    "expr": {
                                        "type": "static-constant-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "Output",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 182,
                                            "char": 44
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "BG_LIGHT_GRAY_TYPE",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 182,
                                            "char": 44
                                        },
                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                        "line": 182,
                                        "char": 44
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "object-property-append",
                                                    "operator": "assign",
                                                    "variable": "this",
                                                    "property": "prefix",
                                                    "expr": {
                                                        "type": "static-constant-access",
                                                        "left": {
                                                            "type": "variable",
                                                            "value": "Output",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 183,
                                                            "char": 59
                                                        },
                                                        "right": {
                                                            "type": "variable",
                                                            "value": "BG_LIGHT_GRAY",
                                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                            "line": 183,
                                                            "char": 59
                                                        },
                                                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                        "line": 183,
                                                        "char": 59
                                                    },
                                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                                    "line": 183,
                                                    "char": 59
                                                }
                                            ],
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 184,
                                            "char": 21
                                        },
                                        {
                                            "type": "break",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 185,
                                            "char": 19
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 185,
                                    "char": 19
                                },
                                {
                                    "type": "default",
                                    "statements": [
                                        {
                                            "type": "break",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 187,
                                            "char": 9
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 187,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                            "line": 188,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 159,
                        "char": 5
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 158,
                    "last-line": 190,
                    "char": 22
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "out",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "str",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 1,
                            "reference": 0,
                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                            "line": 190,
                            "char": 36
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "pre",
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 194,
                                    "char": 16
                                }
                            ],
                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                            "line": 195,
                            "char": 8
                        },
                        {
                            "type": "for",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 195,
                                    "char": 22
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "prefix",
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 195,
                                    "char": 30
                                },
                                "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                "line": 195,
                                "char": 30
                            },
                            "value": "pre",
                            "reverse": 0,
                            "statements": [
                                {
                                    "type": "echo",
                                    "expressions": [
                                        {
                                            "type": "variable",
                                            "value": "pre",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 196,
                                            "char": 21
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 197,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                            "line": 198,
                            "char": 12
                        },
                        {
                            "type": "echo",
                            "expressions": [
                                {
                                    "type": "variable",
                                    "value": "str",
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 198,
                                    "char": 17
                                }
                            ],
                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                            "line": 199,
                            "char": 11
                        },
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "suf",
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 199,
                                    "char": 16
                                }
                            ],
                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                            "line": 200,
                            "char": 11
                        },
                        {
                            "type": "for",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 200,
                                    "char": 25
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "suffix",
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 200,
                                    "char": 33
                                },
                                "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                "line": 200,
                                "char": 33
                            },
                            "value": "suf",
                            "reverse": 0,
                            "statements": [
                                {
                                    "type": "echo",
                                    "expressions": [
                                        {
                                            "type": "variable",
                                            "value": "suf",
                                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                            "line": 201,
                                            "char": 21
                                        }
                                    ],
                                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                                    "line": 202,
                                    "char": 9
                                }
                            ],
                            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                            "line": 203,
                            "char": 5
                        }
                    ],
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 191,
                        "char": 5
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 190,
                    "last-line": 205,
                    "char": 19
                }
            ],
            "constants": [
                {
                    "type": "const",
                    "name": "BG_BLACK_TYPE",
                    "default": {
                        "type": "int",
                        "value": "1",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 6,
                        "char": 28
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 7,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "BG_RED_TYPE",
                    "default": {
                        "type": "int",
                        "value": "2",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 7,
                        "char": 26
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 8,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "BG_GREEN_TYPE",
                    "default": {
                        "type": "int",
                        "value": "3",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 8,
                        "char": 28
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 9,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "BG_YELLOW_TYPE",
                    "default": {
                        "type": "int",
                        "value": "4",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 9,
                        "char": 29
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 10,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "BG_BLUE_TYPE",
                    "default": {
                        "type": "int",
                        "value": "5",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 10,
                        "char": 27
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 11,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "BG_MAGENTA_TYPE",
                    "default": {
                        "type": "int",
                        "value": "6",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 11,
                        "char": 30
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 12,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "BG_CYAN_TYPE",
                    "default": {
                        "type": "int",
                        "value": "7",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 12,
                        "char": 27
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 13,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "BG_LIGHT_GRAY_TYPE",
                    "default": {
                        "type": "int",
                        "value": "8",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 13,
                        "char": 33
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 16,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_BLACK_TYPE",
                    "default": {
                        "type": "int",
                        "value": "11",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 16,
                        "char": 29
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 17,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_DARK_GREY_TYPE",
                    "default": {
                        "type": "int",
                        "value": "12",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 17,
                        "char": 33
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 18,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_BLUE_TYPE",
                    "default": {
                        "type": "int",
                        "value": "13",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 18,
                        "char": 28
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 19,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_LIGHT_BLUE_TYPE",
                    "default": {
                        "type": "int",
                        "value": "14",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 19,
                        "char": 34
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 20,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_GREEN_TYPE",
                    "default": {
                        "type": "int",
                        "value": "15",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 20,
                        "char": 29
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 21,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_LIGHT_GREEN_TYPE",
                    "default": {
                        "type": "int",
                        "value": "16",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 21,
                        "char": 35
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 22,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_CYAN_TYPE",
                    "default": {
                        "type": "string",
                        "value": "CYAN",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 22,
                        "char": 32
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 23,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_LIGHT_CYAN_TYPE",
                    "default": {
                        "type": "int",
                        "value": "17",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 23,
                        "char": 34
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 24,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_RED_TYPE",
                    "default": {
                        "type": "string",
                        "value": "RED",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 24,
                        "char": 30
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 25,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_LIGHT_RED_TYPE",
                    "default": {
                        "type": "int",
                        "value": "18",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 25,
                        "char": 33
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 26,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_PURPLE_TYPE",
                    "default": {
                        "type": "int",
                        "value": "19",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 26,
                        "char": 30
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 27,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_LIGHT_PURPLE_TYPE",
                    "default": {
                        "type": "int",
                        "value": "20",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 27,
                        "char": 36
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 28,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_BROWN_TYPE",
                    "default": {
                        "type": "int",
                        "value": "21",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 28,
                        "char": 29
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 29,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_YELLOW_TYPE",
                    "default": {
                        "type": "int",
                        "value": "22",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 29,
                        "char": 30
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 30,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_LIGHT_GREY_TYPE",
                    "default": {
                        "type": "int",
                        "value": "23",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 30,
                        "char": 34
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 31,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_WHITE_TYPE",
                    "default": {
                        "type": "int",
                        "value": "24",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 31,
                        "char": 29
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 34,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "BG_BLACK",
                    "default": {
                        "type": "string",
                        "value": "\\033[40m",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 34,
                        "char": 32
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 35,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "BG_RED",
                    "default": {
                        "type": "string",
                        "value": "\\033[41m",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 35,
                        "char": 30
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 36,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "BG_GREEN",
                    "default": {
                        "type": "string",
                        "value": "\\033[42m",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 36,
                        "char": 32
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 37,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "BG_YELLOW",
                    "default": {
                        "type": "string",
                        "value": "\\033[43m",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 37,
                        "char": 33
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 38,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "BG_BLUE",
                    "default": {
                        "type": "string",
                        "value": "\\033[44m",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 38,
                        "char": 31
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 39,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "BG_MAGENTA",
                    "default": {
                        "type": "string",
                        "value": "\\033[45m",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 39,
                        "char": 34
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 40,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "BG_CYAN",
                    "default": {
                        "type": "string",
                        "value": "\\033[46m",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 40,
                        "char": 31
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 41,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "BG_LIGHT_GRAY",
                    "default": {
                        "type": "string",
                        "value": "\\033[47m",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 41,
                        "char": 37
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 44,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_BLACK",
                    "default": {
                        "type": "string",
                        "value": "\\033[0;30m",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 44,
                        "char": 34
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 45,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_DARK_GREY",
                    "default": {
                        "type": "string",
                        "value": "\\033[1;30m",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 45,
                        "char": 38
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 46,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_BLUE",
                    "default": {
                        "type": "string",
                        "value": "\\033[0;34m",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 46,
                        "char": 33
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 47,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_LIGHT_BLUE",
                    "default": {
                        "type": "string",
                        "value": "\\033[1;34m",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 47,
                        "char": 39
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 48,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_GREEN",
                    "default": {
                        "type": "string",
                        "value": "\\033[0;32m",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 48,
                        "char": 34
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 49,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_LIGHT_GREEN",
                    "default": {
                        "type": "string",
                        "value": "\\033[1;32m",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 49,
                        "char": 40
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 50,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_CYAN",
                    "default": {
                        "type": "string",
                        "value": "\\033[0;36m",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 50,
                        "char": 33
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 51,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_LIGHT_CYAN",
                    "default": {
                        "type": "string",
                        "value": "\\033[1;36m",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 51,
                        "char": 39
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 52,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_RED",
                    "default": {
                        "type": "string",
                        "value": "\\033[0;31m",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 52,
                        "char": 32
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 53,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_LIGHT_RED",
                    "default": {
                        "type": "string",
                        "value": "\\033[1;31m",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 53,
                        "char": 38
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 54,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_PURPLE",
                    "default": {
                        "type": "string",
                        "value": "\\033[0;35m",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 54,
                        "char": 35
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 55,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_LIGHT_PURPLE",
                    "default": {
                        "type": "string",
                        "value": "\\033[1;35m",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 55,
                        "char": 41
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 56,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_BROWN",
                    "default": {
                        "type": "string",
                        "value": "\\033[0;33m",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 56,
                        "char": 34
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 57,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_YELLOW",
                    "default": {
                        "type": "string",
                        "value": "\\033[1;33m",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 57,
                        "char": 35
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 58,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_LIGHT_GREY",
                    "default": {
                        "type": "string",
                        "value": "\\033[0;37m",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 58,
                        "char": 39
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 59,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "FG_WHITE",
                    "default": {
                        "type": "string",
                        "value": "\\033[1;37m",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 59,
                        "char": 34
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 62,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ANSI_END",
                    "default": {
                        "type": "string",
                        "value": "\\033[0m",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 62,
                        "char": 31
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 63,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ANSI_BOLD",
                    "default": {
                        "type": "string",
                        "value": "\\033[1m",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 63,
                        "char": 32
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 64,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ANSI_ITALIC",
                    "default": {
                        "type": "string",
                        "value": "\\033[3m",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 64,
                        "char": 34
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 65,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ANSI_UNDERLINE",
                    "default": {
                        "type": "string",
                        "value": "\\033[4m",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 65,
                        "char": 37
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 66,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ANSI_BLINK",
                    "default": {
                        "type": "string",
                        "value": "\\033[5m",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 66,
                        "char": 33
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 67,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ANSI_INVERSE",
                    "default": {
                        "type": "string",
                        "value": "\\033[7m",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 67,
                        "char": 35
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 68,
                    "char": 9
                },
                {
                    "type": "const",
                    "name": "ANSI_HIDDEN",
                    "default": {
                        "type": "string",
                        "value": "\\033[8m",
                        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                        "line": 68,
                        "char": 34
                    },
                    "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
                    "line": 72,
                    "char": 13
                }
            ],
            "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
            "line": 3,
            "char": 5
        },
        "file": "\/data\/softDatas\/myExts\/ansi\/ansi\/output.zep",
        "line": 3,
        "char": 5
    }
]