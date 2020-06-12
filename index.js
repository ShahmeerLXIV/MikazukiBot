const Discord = require('discord.js');
const bot = new Discord.Client();

const token = (process.env.token);

const Prefix = ('^');

bot.on('ready', () =>{
    Console.log('Bruh Momento');
})

bot.on('message', message=>{
    let args = message.content.substring(Prefix.length).split(" ");
    
    switch(args[0]){
        case 'ping':
            message.channel.send("pong")
            break;
        case 'info':
            if(args[1] === 'Shahmeer'){
                message.channel.send('He is currently hibernating.');
        
            }else{
                message.channel.send('Please state a user')
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
            if(user){
                if(member){

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
                }
            }    
            break;
        case 'kick':
            if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('```You do not have permission to use this command.```')

            if(user){                
            
                if(member){
                    member.kick('```You have been kicked.```').then(()=>{
                        message.channel.send(```Successfully kicked ${user.tag}```)
                    })
                    .catch(err =>{
                        message.channel.send('```I was unable to kick that user.```');
                        Console.log(err);
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
                    member.ban('```You have been banner.```').then(()=>{
                        message.channel.send(```Successfully banned ${user.tag}```)
                    })
                    .catch(err =>{
                        message.channel.send('```I was unable to ban that user.```')
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