import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

const Boxes = styled.View`
    width: 110px
    height: 110px;
    margin-right: 10px;
    background-color: #fff;
    border-radius: 10px;
`;

const styles = StyleSheet.create({
  viewShortcut: {
    width: '90%',
    marginTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  textShortcut: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5E5751',
  },
  viewContent: {
    flex: 1,
    width: '90%',
    flexDirection: 'row',
    marginTop: 10,
  },
  scrollView: {},
  boxIcon: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    marginTop: 10,
    fontWeight: '600',
    color: '#7D7976',
  },
});

export {Boxes, styles};
