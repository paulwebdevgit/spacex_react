export default class FetchData {
    startUrl = 'https://api.spacexdata.com/v4/';
    getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok){
            throw new Error ('Error: ' + res.status);
        }

        return await res.json()
    };

    getRocket = async () => {
       return await this.getResource(this.startUrl + 'rockets');
    };

    getLaunches  = async () => {
        return await this.getResource(this.startUrl + 'launches/past');
    };

    getCompony = async () => {
        return await this.getResource(this.startUrl + 'company');
    };
}