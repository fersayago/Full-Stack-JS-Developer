import {createStore} from "redux";
import elReducer from "../reducer/reducer"

const defaultData = { articles : [] }
  /* "articles": [
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Peter Schacknow",
    "title": "Stocks making the biggest moves in the premarket: Disney, DoorDash, Snowflake, Fisker & more - CNBC",
    "description": "The stocks making the biggest moves in premarket trading include Disney, DoorDash, Snowflake, Fisker, and more.",
    "url": "https://www.cnbc.com/2021/05/14/stocks-making-the-biggest-moves-in-the-premarket-disney-doordash-snowflake-fisker-more.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/106856531-1616154102749-gettyimages-1307842911-ocr-l-touchofdisney-0318-jg-23.jpeg?v=1616154167",
    "publishedAt": "2021-05-14T11:44:15Z",
    "content": "Take a look at some of the biggest movers in the premarket:\r\nWalt Disney (DIS) Disney shares dropped 3.9% in premarket trading after growth figures for the Disney+ streaming service fell short of Wal… [+3261 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Yun Li",
    "title": "5 things to know before the stock market opens Friday - CNBC",
    "description": "Wall Street is set to rebound for a second-straight day after starting the week with big losses.",
    "url": "https://www.cnbc.com/2021/05/14/5-things-to-know-before-the-stock-market-opens-friday-may-14.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/106877373-16200586453883-NYSE-Trading-Floor-OB-Photo-210503-PRESS-8-jpg?v=1620058727",
    "publishedAt": "2021-05-14T11:44:02Z",
    "content": "Here are the most important news, trends and analysis that investors need to start their trading day:\r\n1. Stocks are set to continue to rebound from the weeks losses\r\nTraders on the NYSE, May 3, 2021… [+3319 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MarketWatch"
    },
    "author": "Barbara Kollmeyer",
    "title": "Rather than 'Will cryptos drop to zero?', investors should be asking this question instead, says strategist - MarketWatch",
    "description": "Critical information for the U.S. trading day",
    "url": "https://www.marketwatch.com/story/rather-than-will-cryptos-drop-to-zero-investors-should-be-asking-this-question-instead-says-strategist-11620991557",
    "urlToImage": "https://images.mktw.net/im-338587/social",
    "publishedAt": "2021-05-14T11:25:00Z",
    "content": "Stocks are looking up at the end of a volatile week for both equities and cryptocurrencies. Keeping the newsflow going on the latter was another tweet from Tesla boss Elon Musk that has sent a popula… [+5143 chars]"
    }
  ] */

const theOnlySourceOfTruth = createStore(elReducer, defaultData);

export default theOnlySourceOfTruth;