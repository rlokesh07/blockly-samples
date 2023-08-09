import * as Blockly from 'blockly';

export const arduinoGenerator = new Blockly.Generator('arduino');
arduinoGenerator.PRECEDENCE = 0;

arduinoGenerator['logic_null'] = function(block) {
    return ['null', arduinoGenerator.PRECEDENCE];
  };

  arduinoGenerator['text'] = function(block) {
    const textValue = block.getFieldValue('TEXT');
    const code = `"${textValue}"`;
    return [code, arduinoGenerator.PRECEDENCE];
  };

  arduinoGenerator['math_number'] = function(block) {
    const code = String(block.getFieldValue('NUM'));
    return [code, arduinoGenerator.PRECEDENCE];
  };

  arduinoGenerator['logic_boolean'] = function(block) {
    const code = (block.getFieldValue('BOOL') === 'TRUE') ? 'true' : 'false';
    return [code, arduinoGenerator.PRECEDENCE];
  };

  arduinoGenerator['member'] = function(block) {
    const name = block.getFieldValue('MEMBER_NAME');
    const value = arduinoGenerator.valueToCode(
        block, 'MEMBER_VALUE', arduinoGenerator.PRECEDENCE);
    const code = `"${name}": ${value}`;
    return code;
  };

  arduinoGenerator['lists_create_with'] = function(block) {
    const values = [];
    for (let i = 0; i < block.itemCount_; i++) {
      const valueCode = arduinoGenerator.valueToCode(block, 'ADD' + i,
          arduinoGenerator.PRECEDENCE);
      if (valueCode) {
        values.push(valueCode);
      }
    }
    const valueString = values.join(',\n');
    const indentedValueString =
        arduinoGenerator.prefixLines(valueString, arduinoGenerator.INDENT);
    const codeString = '[\n' + indentedValueString + '\n]';
    return [codeString, arduinoGenerator.PRECEDENCE];
  };

  arduinoGenerator['object'] = function(block) {
    const statementMembers =
        arduinoGenerator.statementToCode(block, 'MEMBERS');
    const code = '{\n' + statementMembers + '\n}';
    return [code, arduinoGenerator.PRECEDENCE];
  };