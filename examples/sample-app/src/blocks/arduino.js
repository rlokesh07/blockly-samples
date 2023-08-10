import * as Blockly from 'blockly';

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([{
  "type": "object",
  "message0": " { %1 %2 }",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "MEMBERS"
    }
  ],
  "output": null,
  "colour": 230,
},
{
  "type": "member",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": ""
    },
    {
      "type": "field_label",

      "text": "setup"
    },
    {
      "type": "input_value",
      "name": "MEMBER_VALUE"
    }
  ],


  "colour": 230
},
{
  "type": "n",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": ""
    },
    {
      "type": "field_label",

      "text": "loop"
    },
    {
      "type": "input_value",
      "name": "MEMBER_VALUE"
    }
  ],

  "colour": 300,
}, 

{
  "type": "servo-define",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": ""
    },
    {
      "type": "field_label",

      "text": "Servo Init:"
    },
    {
      "type": "input_value",
      "name": "MEMBER_VALUE"
    }
  ],

  "previousStatement" : "null",
  "nextStatement" : "null",
  "colour": 300,
}, 

{
  "type": "servo-attach",
  "message0": " servo attach %1 %2",
  "args0": [
    {
      "type": "field_label"
    },
    {
      "type": "input_value",
      "name": "MEMBERS"
    }
  ],
  "output": null,
  "colour": 230,
}]);