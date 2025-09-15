import React, { forwardRef, useCallback, useMemo } from 'react'
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { BottomSheetModal, BottomSheetView, BottomSheetBackdrop, useBottomSheetModal } from '@gorhom/bottom-sheet';
import Colors from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router'

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ['50%'], [])
  const renderBackdrop = useCallback((props: any) =>
  <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props}/>, [])
  const { dismiss } = useBottomSheetModal();
  return (
    <BottomSheetModal
     ref={ref} 
     snapPoints={snapPoints}
     backdropComponent={renderBackdrop}
     overDragResistanceFactor={0}
     handleIndicatorStyle={{display: 'none'}}
     backgroundStyle={{backgroundColor: Colors.lightGrey, borderRadius: 0}}
     >
    <BottomSheetView style={stylescontentContainer}>
      <View style={styles.toogle}>
        <TouchableOpacity style={{styles.toogleButtom, styles.toogleActive}}>
          <Text style={styles.activeText}>Entrega</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{styles.toogleButtom, styles.toogleInactive}}>
          <Text style={styles.inactiveText}>Retirada</Text>
        </TouchableOpacity>
      </View>

      
    
    <TouchableOpacity onPress={ () => dismiss() }>
      <Text>Fechar</Text>
    </TouchableOpacity>
    </BottomSheetView>
    </BottomSheetModal>
  )
});

export default BottomSheet

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    height: '100%'
  },
});