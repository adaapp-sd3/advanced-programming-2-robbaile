abstract class HasUI {
  showUI: boolean = false
  updateUI!: Function
  set setHandleUpdate(handleUpdate: Function) {
    this.updateUI = handleUpdate
  }
  set shouldShowUI(shouldWe: boolean) {
    this.showUI = shouldWe
  } 
}

export default HasUI
