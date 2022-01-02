module.exports.config = {
	name: "lamviec",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "KEY",
	description: "Có làm thì mới có ăn!",
	commandCategory: "Economy",
	usages: "lamviec",
    cooldowns: 5,
    dependencies: ["parse-ms"],
    envConfig: {
        cooldownTime: 1200000
    }
};

module.exports.run = async ({ event, api, Currencies, __GLOBAL }) => {
    const ms = require("parse-ms");
    let { threadID, messageID } = event;
    let cooldown = __GLOBAL.work.cooldownTime;
    let data = (await Currencies.getData(event.senderID)).workTime;
    if (typeof data !== "undefined" && cooldown - (Date.now() - data) > 0) {
        let time = ms(cooldown - (Date.now() - data));
		return api.sendMessage(`Bạn đang trong thời gian chờ\nVui lòng thử lại sau: ${time.hours}:${time.minutes}:${time.seconds}!`, event.threadID);
    }
    else {
        let job = [
            "đi bán vé số",
            "đi sửa xe",
            "làm nhân viên lập trình",
            "đi hack facebook",
            "làm thợ sửa ống nước may mắn ( ͡° ͜ʖ ͡°)",
            "làm đầu bếp",
            "làm thợ hồ",
            "fake taxi",
            "đi gangbang người khác",
            "làm re sờ chym mờ",
            "đi bán hàng online",
            "làm nội trợ",
            "đi vả mấy thằng sao đỏ, giun vàng",
            "đi bán hoa",
            "đi chơi đĩ trả giá",
            "đi chơi Yasuo trong rank và gánh team"
        ];
        let amount = Math.floor(Math.random() * 31039);
        api.sendMessage(`Bạn ${job[Math.floor(Math.random() * job.length)]} và đã nhận được số tiền là: ${amount} tiền làm việc`, threadID, () => {
             Currencies.increaseMoney(event.senderID, parseInt(amount));
             Currencies.setData(event.senderID, options = { workTime: Date.now() });
        }, messageID);
    }
       
}
