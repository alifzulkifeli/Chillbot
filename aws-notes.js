//module.js:
export const awsNotes = (msg, tail) => {
	switch (tail) {
		case "ec2":
			msg.channel.send({
				files: [
					{
						attachment: "notes/EC2/img" + getRandomInt(80) + ".jpg",
						name: "who.gif",
					},
				],
			});
			break;
		case "iam":
			msg.channel.send({
				files: [
					{
						attachment: "notes/IAM/img" + getRandomInt(17) + ".jpg",
						name: "who.gif",
					},
				],
			});
			break;
		default:
			msg.channel.send({
				files: [
					{
						attachment: "notes/who.gif",
						name: "who.gif",
					},
				],
			});
	}
};

function getRandomInt(max) {
	return Math.floor(Math.random() * max) + 1;
}
