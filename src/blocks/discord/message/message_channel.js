import Blockly from "blockly/core";

const s4d_message_channel = {
    "message0": "%{BKY_MESSAGE_CHANNEL}",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "SEARCH_TYPE",
            "options": [
                [
                    "%{BKY_NAME}",
                    "NAME"
                ],
                [
                    "id",
                    "ID"
                ]
            ]
        }
    ],
    "output": "String",
    "colour": "#9966FF",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks["s4d_message_channel"] = {
    init: function() {
        this.jsonInit(s4d_message_channel);
    }
};

Blockly.JavaScript["s4d_message_channel"] = function(block) {
    const searchType = block.getFieldValue("SEARCH_TYPE");
    if(searchType === "ID"){
        const code = ["(s4d.message.channel || {}).id", Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "NAME"){
        const code = ["(s4d.message.channel || {}).name", Blockly.JavaScript.ORDER_NONE];
        return code;
    }
};
