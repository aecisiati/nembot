const i = '<:infomation:779736273639440394>'
const x = '<:bigx:779736072367505449>'
const tick = '<:bigtick:779736050892931082>'
const { MessageEmbed } = require('discord.js');  

module.exports.run = async (bot, message, args) => {
    let data = await bot.fetchUser(message.author.id);
   const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    if (args.join(' ') === 'all') {
                  if (data.coinsInBank === 0) {
            let bankerrorembed = new MessageEmbed()
            .setColor("#eda098")
            .setTitle(`Your bank is empty!`);
            return message.channel.send(bankerrorembed).catch();
                  }
        data.coinsInWallet += data.coinsInBank;{
          
                let with2embed = new MessageEmbed()
              .setColor("#c4f2cc")
              .setTitle(`**❀ ${data.coinsInBank.toLocaleString()}** coins withdrawn.`);
              await message.channel.send(with2embed);
          ////await message.channel.send(`Withdrawed **${data.coinsInBank}** coins.`);
          
        }

        data.coinsInBank -= data.coinsInBank;

        await data.save();
    } else {
      let withAmount = parseInt(args[0]);
            if (withAmount === 0) {
            let bankerrorembed = new MessageEmbed()
            .setColor("#eda098")
            .setTitle(`You can't withdraw ❀ 0 coins.`);
            return message.channel.send(bankerrorembed).catch();
                  }
        if (isNaN(withAmount)) {
            let numbererrorembed = new MessageEmbed()
            .setColor("#eda098")
            .setTitle(`That's not a number.`);

            return message.channel.send(numbererrorembed).catch();
            //return message.channel.send('That\'s not a number.');
        }

        if (parseInt(withAmount) > data.coinsInBank) {
               let with3embed = new MessageEmbed()
              .setColor("#eda098")
              .setTitle(`You don't have that many coins in your bank.`);
              return message.channel.send(with3embed);
            //return message.channel.send('You do not have that much coins.');
        }

        data.coinsInWallet += parseInt(withAmount); {
              let with4embed = new MessageEmbed()
              .setColor("#c4f2cc")
              .setTitle(`**❀ ${(withAmount).toLocaleString()}** coins withdrawn.`);
              await message.channel.send(with4embed);
          ///await message.channel.send(`Withdrawed **${args[0]}** coins.`);
        }

        data.coinsInBank -= parseInt(withAmount);

        await data.save();
    }
}

module.exports.config = {
    name: 'withdraw', // Command Name
    description: 'Withdraws money from your bank.', // Description
    usage: 'nem withdraw <amount>', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['with'], // Aliases 
    bankSpace: 3, // Amount of bank space to give when command is used.
    cooldown: 3 // Command Cooldown
}
