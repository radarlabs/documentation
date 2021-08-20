const ejs = require('ejs');
const chains = require('../schemas/chains/chains.json')
const fs = require('fs');

const generateChains = async () => {
  const template ="./templates/places/_chains_table.mdx.ejs";
  const output = "./docs/places/_chains_table.mdx";

  console.log(`Regenerating ${output} from ${template}`);

  const chainsTable =
    await ejs.renderFile(
      template,
      { chains },
      { async: true, rmWhitespace: true },
    );

  fs.writeFileSync(output, chainsTable)
};

Promise.all([
  generateChains(),
]);
