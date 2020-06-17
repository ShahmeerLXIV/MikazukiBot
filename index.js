const Discord = require('discord.js');
const bot = new Discord.Client();

const token = (process.env.token);

const Prefix = ('^');


bot.on('ready', () =>{
    Console.log('Bruh Momento');
})

bot.on('message', message=>{

    (message.content.toLowerCase() === 'Kore ga requiem da')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone')
    message.channel.send('<@everyone');


    let args = message.content.substring(Prefix.length).split(" ");

    if(message.author.bot || !message.content.startsWith(Prefix)) return;
    
    switch(args[0].toLowerCase()){
        case 'ping':
            message.channel.send("pong")
            break;
        case 'info':
            if(!args[1].toLowerCase) return message.channel.send('```Please specify a user.```');

            if(args[1] === 'Shahmeer'){
                message.channel.send('```He is currently playing anime waifu game.```');
            }
            if(args[1] === 'Gorodo'){
                message.channel.send('```Horny.```');
            }
            if(args[1] === 'Kart'){
                message.channel.send('```He is playing Roblox.```');
            }
            if(args[1] === 'Starry'){
                message.channel.send('```He is currently very tired.```');
            }
            if(args[1] === 'Yeetus'){
                message.channel.send('```He is eating cheetos.```')
            }
            if(args[1] === 'H'){
                message.channel.send('```It\'s a me Super Paper Mario! WAHOOO!!```');
            }
            if(args[1] === 'Poke'){
                message.channel.send('```He is currently sucking Hichem\'s dick.```');
            }
            if(args[1] === 'Shuk'){
                message.channel.send('```He controls the future of the PPP server.```');
            }
            if(args[1] === 'Echoes'){
                message.channel.send('```District 6 Female.```');
            }
            if(args[1] === 'Wons'){
                message.channel.send('```Known child rapist, his most brutal case was raping a cosplayer dressed as a fictional character from the franchise JoJo\'s Bizarre Adventure , the said cosplayer dressed as a character of the fourth part, Shigekiyo "Shigechi" Yangu.```');
            }
            if(args[1] === 'Hoodied'){
                message.channel.send('https://imgur.com/aHgzynv');
            }
            break;
        case 'zahando':
            if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('```You do not have permission to use this command.```')
            message.channel.send('https://tenor.com/view/scrape-okuyasu-nijimura-za-hando-the-hand-jojo-gif-14165071').then(
                (message => message.delete({timeout: 2000}))
            );
            message.delete();
            if(!args[1]) return message.channel.send('```Please specify a value.```')
            message.channel.bulkDelete(args[1]);   
            break;
        case 'heavensdoor':
            const embed = new Discord.MessageEmbed()
            .setTitle('User Information')
            .addField('User\'s Name', message.author.username)
            .addField('Nickname', message.member.nickname)
            .addField('Join Date', message.member.joinedAt)
            .addField('Account Creation Date', message.author.createdAt)
            .setFooter(message.author.id)
            .setColor(0x00cae7)
            .setThumbnail(message.author.displayAvatarURL())
            message.channel.send(embed);
            break;
        case 'kick':
            if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('```You do not have permission to use this command.```')

            if(user){                
            
                if(member){
                    member.kick('```You have been kicked.```').then(()=>{
                        message.reply(```Successfully kicked ${user.tag}```)
                    });
                } else{
                    message.channel.send('``That user is not in the server.``')
                }
            } else{
                message.channel.send('``That user is not in the server``');
            }
            break;
        case 'ban':
            if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('```You do not have permission to use this command.```')
            const user = message.mentions.users.first();

            
            if(user){
                const member  = message.guild.member(user);

                if(member){
                    member.ban('```You have been banned.```').then(()=>{
                        message.reply(```Successfully banned ${user.tag}```)
                    });
                } else{
                    message.channel.send('```That user is not in the server```')
                }
            } else{
                message.channel.send('```That user is not in the server```');
            }
            break;

        
            
            

    
        
    }

   
           
            
            
    }

)

bot.login(process.env.token);