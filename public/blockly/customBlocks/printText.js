goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.defineBlocksWithJsonArray(
    [{
        "type": "print_text",
        "message0": "print %1",
        "args0": [
            {
                "type": "input_value",
                "name": "str",
                "check": "String"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 225,
        "tooltip": "Print some text",
        "helpUrl": ""
    }]
)
