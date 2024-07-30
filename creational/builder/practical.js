
class CodeBuilder {
    constructor(className) {
        this.className = className;
        this.fields = [];
    }

    addField(name) {
        this.fields.push(name);
        return this;
    }

    toString()
    {
        let code = `class ${this.className} {`;
        if (this.fields.length > 0) {
            code += `\n  constructor(${this.fields.join(', ')}) {\n`;
            for (const field of this.fields) {
                code += `    this.${field} = ${field};\n`;
            }
            code += `  }`;
        }
        code += `\n}`;
        return code;
    }
}