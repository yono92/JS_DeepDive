function delay(milliseconds) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(new Date());
		}, milliseconds);
	});
}

// console.log(`Delaying... ${new Date().getSeconds()}s`);

// delay(1000).then((newDate) => {
// 	console.log(`Done ${newDate.getSeconds()}s`);
// });

// async function playingWithDelays() {
// 	console.log(`Delaying...`, new Date());

// 	const dateAfterOneSecond = await delay(1000);
// 	console.log(dateAfterOneSecond);

// 	const dateAfterThreeSeconds = await delay(3000);
// 	console.log(dateAfterThreeSeconds);

// 	return 'done';
// }

// playingWithDelays();

function delayError(milliseconds) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			reject(new Error(`Error after ${milliseconds}ms`));
		}, milliseconds);
	});
}

async function playingWithError(throwSyncError) {
	try {
		if (throwSyncError) {
			throw new Error('This is a synchronous error');
		}
		await delayError(1000);
	} catch (err) {
		console.log(`We have an error : ${err.message}`);
	} finally {
		console.log('Done');
	}
}

playingWithError(false);

async function errorNotCaught() {
	try {
		return delayError(1000);
	} catch (error) {
		console.error('Error caught by the async function ' + error.message);
	}
}

errorNotCaught().catch((error) =>
	console.error('Error caught by the caller:' + error.message),
);
