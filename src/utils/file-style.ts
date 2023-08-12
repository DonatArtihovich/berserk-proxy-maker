export default `
  .deck-file-wrapper {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0;
  }
 
  .cards-page {
    margin-top: -25px;
    width: 796px;
    height: 1122px;
    padding: 120px 75px;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    box-sizing: border-box;
  }

  .cards-page:first-child {
    margin: 0;
  }
 
  .file-card {
    margin: 0 -3.5px 0 0;
    padding: 0;
    width: 210px;
    height: auto;
    box-sizing: border-box;
  }`