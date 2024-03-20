import * as Blockly from 'blockly/core';

const blockstuff = {
    "type": "s4g_consolewarn",
    "message0": "complain but yellow and slightly less annoying %1 %2 %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "NAME"
      },
      {
        "type": "input_end_row"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "sendds an warning to the console.",
    "helpUrl": ""
  };

  Blockly.Blocks[blockstuff.type] = {
    init: function() {
        this.jsonInit(blockstuff);
    }
};

Blockly.JavaScript[blockstuff.type] = function(block) {
    const stats = block.getFieldValue("NAME");
    const code = [`console.warn(${stats});\n`, Blockly.JavaScript.ORDER_NONE]
  
      return code;
  
  };
  