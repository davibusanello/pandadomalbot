let mensagens = [];
const padroesFeitos = [];

exports.default = (client, target, context, message) => {
  if (message.startsWith('.') || message.startsWith('/')) {
    return;
  }
  mensagens.push(message);

  if (
    mensagens[mensagens.length - 1] === mensagens[mensagens.length - 2] &&
    padroesFeitos.indexOf(message) === -1
  ) {
    padroesFeitos.push(message);
    client.say(target, message);
  }

  if (mensagens.length > 2) {
    mensagens = mensagens.splice(1);
  }
};
