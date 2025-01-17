import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  margin-left: 15px;
  margin-top: 30px;
  width: 625px;
  float: left;
  
  .banner-img {
    width: 625px;
    height: 270px;
    display: block;
    border-radius: 6px;
  }
`;


export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  background-color: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    width: 32px;
    height: 32px;
    display: block;
    float: left;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;
export const ListInfo = styled.div`
  width: 500px;
  float: l;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 4px;
  }
  .desc {
    font-size: 13px;
    line-height: 24px;
    color: #999;
    margin:0 4px 8px 0;
  }
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${props => props.imgUrl});
  background-size: contain;
  border-radius: 4px;
  margin-bottom: 6px;

`;

export const WriterWrapper = styled.div`
  width:278px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  height: 300px;
  line-height: 300px;
  text-align: center;
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background-color: #5a5a5a;
  text-align: center;
  border-radius: 20px;
  cursor: pointer;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 0;
  bottom: 100px;
  font-size: 14px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  cursor: pointer;
`;