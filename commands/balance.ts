import {Colors, CommandInteraction, EmbedBuilder} from "discord.js";

export const balance = async (interaction:CommandInteraction) => {
    await interaction.deferReply()
    try {
    const balance = await fetch(`http://localhost:3001/user/${interaction.user.id}/balance`)
    const data = await balance.json();

    const embed = new EmbedBuilder().setTitle("Balance").setDescription(`Your balance is $${data.balance}`).setColor("Green")
    await interaction.editReply({embeds: [embed]})
    } catch {
        interaction.editReply("Could not get balance")
    }

}