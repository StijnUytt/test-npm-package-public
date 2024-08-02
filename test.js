function generateCreateExternalTableSQL(table) {
    tables.push(table)
    const {name, format, uris } = table;
    const uriList = uris.map(uri => `'${uri}'`).join(', ');
  
    const sql = `
      CREATE EXTERNAL TABLE IF NOT EXISTS \`${name}\`
      OPTIONS (
        format = "${format}",
        uris = [${uriList}]
      );`
      
    return sql
  }
  
  module.exports = { generateCreateExternalTableSQL };