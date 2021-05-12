exports.default = (client, target, context, message) => {
  switch (message) {
    case '!theme':
    case '!tema':
      client.say(
        target,
        `Esse é o tema que eu uso no meu VSCode levxycAnimada https://marketplace.visualstudio.com/items?itemName=jolaleye.horizon-theme-vscode`,
      );
      break;
    case '!help':
    case '!site':
      client.say(
        target,
        `
        Site do bot mais carinhoso da twitch, leia a documentação do pandadomalbot 🐼 https://levxyca.codes/pandadomalsite/`,
      );
      break;
    case '!repopanda':
      client.say(
        target,
        `Repositório do pandadomalbot 🐼 https://github.com/levxyca/pandadomalbot`,
      );
      break;
    case '!picole':
    case '!sorvete':
      client.say(
        target,
        `/me Olha o sorveteeeeeeee, fresquinho a toda hora. Por apenas a sua ALMA 😈`,
      );
      break;
    case '!sabores':
      client.say(
        target,
        `/me Sabores da casa 🍦 Shacolate, Leite Compensado, Frocus, Napolialma, Trucado, Motankum e Vambruesha.`,
      );
      break;
    case '!lola':
    case '!meleca':
      client.say(
        target,
        `auau auau auau auau auau auau auau auau auau auau auau auau auau auau auau auau auau auau auau auau auau auau auau auau auau auau auau auau auau auau `,
      );
      break;
    case '!docs':
      client.say(
        target,
        `Repositório que reúne todas as minhas anotações de estudo 📂 https://docs.levxyca.codes/`,
      );
      break;
    case '!modlider':
      client.say(
        target,
        `Veja quem é a Líder dos Mods: https://clips.twitch.tv/CarefulSassyPancakeWow-Pu6-8Hfgcg7YaPyr`,
      );
      break;
    case '!horarios':
      client.say(
        target,
        `/me Temos lives todas ás segundas, quartas e sextas das 16h até ás 18h. Normalmente nas segundas estudamos Javascript, nas quartas fazemos projetos aleatórios e nas sextas temos o nosso querido !levxoque onde queimamos hardware.`,
      );
      break;
    case '!panda':
      client.say(
        target,
        `░░░░░░░░▄██▄░░░░░░▄▄░░ ░░░░░░░▐███▀░░░░░▄███▌ ░░▄▀░░▄█▀▀░░░░░░░░▀██░ ░█░░░██░░░░░░░░░░░░░░░ █▌░░▐██░░▄██▌░░▄▄▄░░░▄ ██░░▐██▄░▀█▀░░░▀██░░▐▌ ██▄░▐███▄▄░░▄▄▄░▀▀░▄██ ▐███▄██████▄░▀░▄█████▌ ▐████████████▀▀██████░ ░▐████▀██████░░█████░░ ░░░▀▀▀░░█████▌░████▀░░ ░░░░░░░░░▀▀███░▀▀▀░░░░`,
      );
      break;
    case '!forms':
      client.say(target, `https://forms.gle/px6F5S2xxhpq53vb8`);
      break;
    case '!maratona':
      client.say(
        target,
        `No dia 29/05/2021, às 12h00, daremos início a III Edição da Maratona Live Coders Girls. Será um sábado de 12 horas de conteúdo incrível feito pela própria comunidade para compartilhar conhecimento, experiências e tudo que há de bom. :heart: https://maratona3.live/`,
      );
      break;
    default:
      break;
  }
};
