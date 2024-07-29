type Theme = {
  accentBackground: string;
  accentColor: string;
  background0: string;
  background025: string;
  background05: string;
  background075: string;
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;
  color7: string;
  color8: string;
  color9: string;
  color10: string;
  color11: string;
  color12: string;
  color0: string;
  color025: string;
  color05: string;
  color075: string;
  background: string;
  backgroundHover: string;
  backgroundPress: string;
  backgroundFocus: string;
  borderColor: string;
  borderColorHover: string;
  borderColorPress: string;
  borderColorFocus: string;
  color: string;
  colorHover: string;
  colorPress: string;
  colorFocus: string;
  colorTransparent: string;
  placeholderColor: string;
  outlineColor: string;

}

function t(a: [number, number][]) {
  let res: Record<string,string> = {}
  for (const [ki, vi] of a) {
    res[ks[ki] as string] = vs[vi] as string
  }
  return res as Theme
}
const vs = [
  'hsla(194, 59%, 51%, 1)',
  'hsla(0, 0%, 81%, 0)',
  'hsla(0, 0%, 81%, 0.25)',
  'hsla(0, 0%, 81%, 0.5)',
  'hsla(0, 0%, 81%, 0.75)',
  'hsla(0, 0%, 81%, 1)',
  'hsla(0, 0%, 78%, 1)',
  'hsla(0, 0%, 74%, 1)',
  'hsla(0, 0%, 71%, 1)',
  'hsla(0, 0%, 67%, 1)',
  'hsla(0, 0%, 64%, 1)',
  'hsla(0, 0%, 60%, 1)',
  'hsla(0, 0%, 57%, 1)',
  'hsla(0, 0%, 53%, 1)',
  'hsla(0, 0%, 50%, 1)',
  'hsla(0, 0%, 15%, 1)',
  'hsla(0, 0%, 15%, 0)',
  'hsla(0, 0%, 15%, 0.25)',
  'hsla(0, 0%, 15%, 0.5)',
  'hsla(0, 0%, 15%, 0.75)',
  'hsla(129, 73%, 9%, 1)',
  'hsla(0, 0%, 19%, 1)',
  'hsla(0, 0%, 23%, 1)',
  'hsla(0, 0%, 27%, 1)',
  'hsla(0, 0%, 31%, 1)',
  'hsla(0, 0%, 34%, 1)',
  'hsla(0, 0%, 38%, 1)',
  'hsla(0, 0%, 42%, 1)',
  'hsla(0, 0%, 46%, 1)',
  'hsla(0, 0%, 93%, 1)',
  'hsla(193, 29%, 66%, 0)',
  'hsla(193, 29%, 66%, 0.25)',
  'hsla(193, 29%, 66%, 0.5)',
  'hsla(193, 29%, 66%, 0.75)',
  'hsla(194, 29%, 66%, 1)',
  'hsla(194, 39%, 61%, 1)',
  'hsla(194, 49%, 56%, 1)',
  'hsla(194, 64%, 41%, 1)',
  'hsla(194, 69%, 31%, 1)',
  'hsla(194, 75%, 21%, 1)',
  'hsla(194, 80%, 12%, 1)',
  'hsla(29, 95%, 26%, 1)',
  'hsla(29, 73%, 54%, 1)',
  'hsla(68, 69%, 58%, 1)',
  'hsla(129, 69%, 9%, 1)',
  'hsla(129, 70%, 9%, 0)',
  'hsla(129, 70%, 9%, 0.25)',
  'hsla(129, 70%, 9%, 0.5)',
  'hsla(129, 70%, 9%, 0.75)',
  'hsla(29, 100%, 26%, 0)',
  'hsla(29, 100%, 26%, 0.25)',
  'hsla(29, 100%, 26%, 0.5)',
  'hsla(29, 100%, 26%, 0.75)',
  'hsla(29, 100%, 26%, 1)',
  'hsla(29, 94%, 28%, 1)',
  'hsla(29, 88%, 31%, 1)',
  'hsla(29, 82%, 34%, 1)',
  'hsla(54, 80%, 30%, 1)',
  'hsla(79, 78%, 26%, 1)',
  'hsla(104, 76%, 22%, 1)',
  'hsla(129, 74%, 18%, 1)',
  'hsla(68, 73%, 58%, 1)',
  'hsla(193, 29%, 50%, 1)',
  'rgba(0,0,0,0.5)',
  'rgba(0,0,0,0.8)',
]

const ks = [
'accentBackground',
'accentColor',
'background0',
'background025',
'background05',
'background075',
'color1',
'color2',
'color3',
'color4',
'color5',
'color6',
'color7',
'color8',
'color9',
'color10',
'color11',
'color12',
'color0',
'color025',
'color05',
'color075',
'background',
'backgroundHover',
'backgroundPress',
'backgroundFocus',
'borderColor',
'borderColorHover',
'borderColorPress',
'borderColorFocus',
'color',
'colorHover',
'colorPress',
'colorFocus',
'colorTransparent',
'placeholderColor',
'outlineColor']


const n1 = t([[0, 0],[1, 0],[2, 1],[3, 2],[4, 3],[5, 4],[6, 5],[7, 6],[8, 7],[9, 8],[10, 9],[11, 10],[12, 11],[13, 12],[14, 13],[15, 14],[16, 15],[17, 15],[18, 16],[19, 17],[20, 18],[21, 19],[22, 5],[23, 4],[24, 6],[25, 6],[26, 8],[27, 7],[28, 9],[29, 8],[30, 15],[31, 15],[32, 15],[33, 15],[34, 16],[35, 13],[36, 17]])

export const light = n1
const n2 = t([[0, 20],[1, 20],[2, 16],[3, 17],[4, 18],[5, 19],[6, 15],[7, 21],[8, 22],[9, 23],[10, 24],[11, 25],[12, 26],[13, 27],[14, 28],[15, 14],[16, 29],[17, 5],[18, 1],[19, 2],[20, 3],[21, 4],[22, 15],[23, 21],[24, 19],[25, 19],[26, 23],[27, 24],[28, 22],[29, 23],[30, 5],[31, 29],[32, 5],[33, 29],[34, 1],[35, 28],[36, 2]])

export const dark = n2
const n3 = t([[0, 8],[1, 8],[2, 30],[3, 31],[4, 32],[5, 33],[6, 34],[7, 35],[8, 36],[9, 0],[10, 37],[11, 38],[12, 39],[13, 40],[14, 41],[15, 42],[16, 43],[17, 44],[18, 45],[19, 46],[20, 47],[21, 48],[22, 34],[23, 33],[24, 35],[25, 35],[26, 0],[27, 36],[28, 37],[29, 0],[30, 44],[31, 43],[32, 44],[33, 43],[34, 45],[35, 41],[36, 46]])

export const light_accent = n3
const n4 = t([[0, 28],[1, 28],[2, 49],[3, 50],[4, 51],[5, 52],[6, 53],[7, 54],[8, 55],[9, 56],[10, 57],[11, 58],[12, 59],[13, 60],[14, 20],[15, 61],[16, 62],[17, 34],[18, 30],[19, 31],[20, 32],[21, 33],[22, 53],[23, 54],[24, 52],[25, 52],[26, 56],[27, 57],[28, 55],[29, 56],[30, 34],[31, 62],[32, 34],[33, 62],[34, 30],[35, 20],[36, 31]])

export const dark_accent = n4
const n5 = t([[30, 15],[31, 14],[32, 15],[33, 14]])

export const light_alt1 = n5
const n6 = t([[30, 14],[31, 13],[32, 14],[33, 13]])

export const light_alt2 = n6
const n7 = t([[22, 8],[23, 7],[24, 9],[25, 9],[26, 11],[27, 10],[29, 11],[28, 12]])

export const light_active = n7
export const light_surface3 = n7
export const light_Button = n7
export const light_SliderTrackActive = n7
const n8 = t([[22, 6],[23, 5],[24, 7],[25, 7],[26, 9],[27, 8],[29, 9],[28, 10]])

export const light_surface1 = n8
export const light_ListItem = n8
export const light_SelectTrigger = n8
export const light_Card = n8
export const light_Progress = n8
export const light_TooltipArrow = n8
export const light_SliderTrack = n8
export const light_Input = n8
export const light_TextArea = n8
const n9 = t([[22, 7],[23, 6],[24, 8],[25, 8],[26, 10],[27, 9],[29, 10],[28, 11]])

export const light_surface2 = n9
export const light_Checkbox = n9
export const light_Switch = n9
export const light_TooltipContent = n9
export const light_RadioGroupItem = n9
const n10 = t([[22, 10],[23, 10],[24, 11],[25, 11],[26, 10],[27, 10],[29, 11],[28, 11]])

export const light_surface4 = n10
const n11 = t([[30, 29],[31, 14],[32, 29],[33, 14]])

export const dark_alt1 = n11
const n12 = t([[30, 14],[31, 28],[32, 14],[33, 28]])

export const dark_alt2 = n12
const n13 = t([[22, 23],[23, 24],[24, 22],[25, 22],[26, 26],[27, 27],[29, 26],[28, 25]])

export const dark_active = n13
export const dark_surface3 = n13
export const dark_Button = n13
export const dark_SliderTrackActive = n13
const n14 = t([[22, 21],[23, 22],[24, 15],[25, 15],[26, 24],[27, 25],[29, 24],[28, 23]])

export const dark_surface1 = n14
export const dark_ListItem = n14
export const dark_SelectTrigger = n14
export const dark_Card = n14
export const dark_Progress = n14
export const dark_TooltipArrow = n14
export const dark_SliderTrack = n14
export const dark_Input = n14
export const dark_TextArea = n14
const n15 = t([[22, 22],[23, 23],[24, 21],[25, 21],[26, 25],[27, 26],[29, 25],[28, 24]])

export const dark_surface2 = n15
export const dark_Checkbox = n15
export const dark_Switch = n15
export const dark_TooltipContent = n15
export const dark_RadioGroupItem = n15
const n16 = t([[22, 25],[23, 25],[24, 24],[25, 24],[26, 25],[27, 25],[29, 24],[28, 24]])

export const dark_surface4 = n16
const n17 = t([[30, 43],[31, 42],[32, 43],[33, 42]])

export const light_accent_alt1 = n17
const n18 = t([[30, 42],[31, 41],[32, 42],[33, 41]])

export const light_accent_alt2 = n18
const n19 = t([[22, 0],[23, 36],[24, 37],[25, 37],[26, 39],[27, 38],[29, 39],[28, 40]])

export const light_accent_active = n19
export const light_accent_surface3 = n19
export const light_accent_Button = n19
export const light_accent_SliderTrackActive = n19
const n20 = t([[22, 35],[23, 34],[24, 36],[25, 36],[26, 37],[27, 0],[29, 37],[28, 38]])

export const light_accent_surface1 = n20
export const light_accent_ListItem = n20
export const light_accent_SelectTrigger = n20
export const light_accent_Card = n20
export const light_accent_Progress = n20
export const light_accent_TooltipArrow = n20
export const light_accent_SliderTrack = n20
export const light_accent_Input = n20
export const light_accent_TextArea = n20
const n21 = t([[22, 36],[23, 35],[24, 0],[25, 0],[26, 38],[27, 37],[29, 38],[28, 39]])

export const light_accent_surface2 = n21
export const light_accent_Checkbox = n21
export const light_accent_Switch = n21
export const light_accent_TooltipContent = n21
export const light_accent_RadioGroupItem = n21
const n22 = t([[22, 38],[23, 38],[24, 39],[25, 39],[26, 38],[27, 38],[29, 39],[28, 39]])

export const light_accent_surface4 = n22
const n23 = t([[30, 62],[31, 61],[32, 62],[33, 61]])

export const dark_accent_alt1 = n23
const n24 = t([[30, 61],[31, 20],[32, 61],[33, 20]])

export const dark_accent_alt2 = n24
const n25 = t([[22, 56],[23, 57],[24, 55],[25, 55],[26, 59],[27, 60],[29, 59],[28, 58]])

export const dark_accent_active = n25
export const dark_accent_surface3 = n25
export const dark_accent_Button = n25
export const dark_accent_SliderTrackActive = n25
const n26 = t([[22, 54],[23, 55],[24, 53],[25, 53],[26, 57],[27, 58],[29, 57],[28, 56]])

export const dark_accent_surface1 = n26
export const dark_accent_ListItem = n26
export const dark_accent_SelectTrigger = n26
export const dark_accent_Card = n26
export const dark_accent_Progress = n26
export const dark_accent_TooltipArrow = n26
export const dark_accent_SliderTrack = n26
export const dark_accent_Input = n26
export const dark_accent_TextArea = n26
const n27 = t([[22, 55],[23, 56],[24, 54],[25, 54],[26, 58],[27, 59],[29, 58],[28, 57]])

export const dark_accent_surface2 = n27
export const dark_accent_Checkbox = n27
export const dark_accent_Switch = n27
export const dark_accent_TooltipContent = n27
export const dark_accent_RadioGroupItem = n27
const n28 = t([[22, 58],[23, 58],[24, 57],[25, 57],[26, 58],[27, 58],[29, 57],[28, 57]])

export const dark_accent_surface4 = n28
const n29 = t([[30, 6],[31, 5],[32, 7],[33, 7],[22, 15],[23, 15],[24, 15],[25, 15],[26, 14],[27, 13],[29, 12],[28, 11]])

export const light_SwitchThumb = n29
export const light_SliderThumb = n29
export const light_Tooltip = n29
export const light_ProgressIndicator = n29
const n30 = t([[22, 63]])

export const light_SheetOverlay = n30
export const light_DialogOverlay = n30
export const light_ModalOverlay = n30
export const light_accent_SheetOverlay = n30
export const light_accent_DialogOverlay = n30
export const light_accent_ModalOverlay = n30
const n31 = t([[30, 21],[31, 22],[32, 15],[33, 15],[22, 5],[23, 29],[24, 5],[25, 29],[26, 14],[27, 28],[29, 27],[28, 26]])

export const dark_SwitchThumb = n31
export const dark_SliderThumb = n31
export const dark_Tooltip = n31
export const dark_ProgressIndicator = n31
const n32 = t([[22, 64]])

export const dark_SheetOverlay = n32
export const dark_DialogOverlay = n32
export const dark_ModalOverlay = n32
export const dark_accent_SheetOverlay = n32
export const dark_accent_DialogOverlay = n32
export const dark_accent_ModalOverlay = n32
const n33 = t([[30, 35],[31, 34],[32, 36],[33, 36],[22, 44],[23, 43],[24, 44],[25, 43],[26, 42],[27, 41],[29, 40],[28, 39]])

export const light_accent_SwitchThumb = n33
export const light_accent_SliderThumb = n33
export const light_accent_Tooltip = n33
export const light_accent_ProgressIndicator = n33
const n34 = t([[30, 54],[31, 55],[32, 53],[33, 53],[22, 34],[23, 62],[24, 34],[25, 62],[26, 61],[27, 20],[29, 60],[28, 59]])

export const dark_accent_SwitchThumb = n34
export const dark_accent_SliderThumb = n34
export const dark_accent_Tooltip = n34
export const dark_accent_ProgressIndicator = n34