import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

const Container = styled.SafeAreaView`
  width: 100%;
  height: 120px;
  background-color: #fff;
`;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxRounded: {
    width: 60,
    height: 60,
    backgroundColor: '#EEE9E5',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  boxText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#ec7404',
  },
  viewNamed: {
    justifyContent: 'center',
  },
  textNamed: {
    color: '#ec7404',
    fontWeight: '500',
    fontSize: 20,
  },
  textAgCc: {
    marginTop: 3,
    fontWeight: '300',
  },
  viewIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },

  // TEXTINPUT STYLES
  textInput: {
    width: '50%',
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#EEE9E5',
    paddingLeft: 3,
  },
});

export {Container, styles};
