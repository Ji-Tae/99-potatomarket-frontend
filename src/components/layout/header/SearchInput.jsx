import InputBox from '../../common/InputBox';

function SearchInput() {
  return (
    <InputBox
      placeholder={'원하는 물품을 검색하세요'}
      outlinecolor={'#C6C7C0'}
      linewidth={'3px'}
      width={'296px'}
      height={'42px'}
      padding={'0 30px'}
      margin={'0px 70px 0px 0px'}
    />
  );
}

export default SearchInput;
