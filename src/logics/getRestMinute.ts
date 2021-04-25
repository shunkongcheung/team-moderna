const getRestMinute = async (): Promise<{
    restMinute: number;
}> => {
    return new Promise((resolve) => {
        chrome.storage.local.get(['restMinute'], (result: any) => {
            console.log(result)
            resolve(result)
        });
    });
};

export default getRestMinute;