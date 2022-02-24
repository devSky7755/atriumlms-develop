import { Theme } from '@mui/material';

import muiAccordion from './muiAccordion';
import muiAccordionActions from './muiAccordionActions';
import muiAccordionDetails from './muiAccordionDetails';
import muiAccordionSummary from './muiAccordionSummary';
import muiAlert from './muiAlert';
import muiAlertTitle from './muiAlertTitle';
import muiAppBar from './muiAppBar';
import muiAutocomplete from './muiAutocomplete';
import muiAvatar from './muiAvatar';
import muiAvatarGroup from './muiAvatarGroup';
import muiBackdrop from './muiBackdrop';
import muiBadge from './muiBadge';
import muiBottomNavigation from './muiBottomNavigation';
import muiBottomNavigationAction from './muiBottomNavigationAction';
import muiBreadcrumbs from './muiBreadcrumbs';
import muiButton from './muiButton';
import muiButtonBase from './muiButtonBase';
import muiButtonGroup from './muiButtonGroup';
import muiCard from './muiCard';
import muiCardActionArea from './muiCardActionArea';
import muiCardActions from './muiCardActions';
import muiCardContent from './muiCardContent';
import muiCardHeader from './muiCardHeader';
import muiCardMedia from './muiCardMedia';
import muiCheckbox from './muiCheckbox';
import muiChip from './muiChip';
import muiCircularProgress from './muiCircularProgress';
import muiCollapse from './muiCollapse';
import muiContainer from './muiContainer';
import muiCssBaseline from './muiCssBaseline';
import muiDialog from './muiDialog';
import muiDialogActions from './muiDialogActions';
import muiDialogContent from './muiDialogContent';
import muiDialogContentText from './muiDialogContentText';
import muiDialogTitle from './muiDialogTitle';
import muiDivider from './muiDivider';
import muiDrawer from './muiDrawer';
import muiFab from './muiFab';
import muiFilledInput from './muiFilledInput';
import muiFormControl from './muiFormControl';
import muiFormControlLabel from './muiFormControlLabel';
import muiFormGroup from './muiFormGroup';
import muiFormHelperText from './muiFormHelperText';
import muiFormLabel from './muiFormLabel';
import muiGrid from './muiGrid';
import muiIcon from './muiIcon';
import muiIconButton from './muiIconButton';
import muiImageList from './muiImageList';
import muiImageListItem from './muiImageListItem';
import muiImageListItemBar from './muiImageListItemBar';
import muiInput from './muiInput';
import muiInputAdornment from './muiInputAdornment';
import muiInputBase from './muiInputBase';
import muiInputLabel from './muiInputLabel';
import muiLinearProgress from './muiLinearProgress';
import muiLink from './muiLink';
import muiList from './muiList';
import muiListItem from './muiListItem';
import muiListItemAvatar from './muiListItemAvatar';
import muiListItemButton from './muiListItemButton';
import muiListItemIcon from './muiListItemIcon';
import muiListItemSecondaryAction from './muiListItemSecondaryAction';
import muiListItemText from './muiListItemText';
import muiListSubheader from './muiListSubheader';
import muiMenu from './muiMenu';
import muiMenuItem from './muiMenuItem';
import muiMobileStepper from './muiMobileStepper';
import muiModal from './muiModal';
import muiNativeSelect from './muiNativeSelect';
import muiOutlinedInput from './muiOutlinedInput';
import muiPagination from './muiPagination';
import muiPaginationItem from './muiPaginationItem';
import muiPaper from './muiPaper';
import muiPopover from './muiPopover';
import muiRadio from './muiRadio';
import muiRating from './muiRating';
import muiScopedCssBaseline from './muiScopedCssBaseline';
import muiSelect from './muiSelect';
import muiSkeleton from './muiSkeleton';
import muiSlider from './muiSlider';
import muiSnackbar from './muiSnackbar';
import muiSnackbarContent from './muiSnackbarContent';
import muiSpeedDial from './muiSpeedDial';
import muiSpeedDialAction from './muiSpeedDialAction';
import muiSpeedDialIcon from './muiSpeedDialIcon';
import muiStack from './muiStack';
import muiStep from './muiStep';
import muiStepButton from './muiStepButton';
import muiStepConnector from './muiStepConnector';
import muiStepContent from './muiStepContent';
import muiStepIcon from './muiStepIcon';
import muiStepLabel from './muiStepLabel';
import muiStepper from './muiStepper';
import muiSvgIcon from './muiSvgIcon';
import muiSwitch from './muiSwitch';
import muiTab from './muiTab';
import muiTable from './muiTable';
import muiTableBody from './muiTableBody';
import muiTableCell from './muiTableCell';
import muiTableContainer from './muiTableContainer';
import muiTableFooter from './muiTableFooter';
import muiTableHead from './muiTableHead';
import muiTablePagination from './muiTablePagination';
import muiTableRow from './muiTableRow';
import muiTableSortLabel from './muiTableSortLabel';
import muiTabs from './muiTabs';
import muiTextField from './muiTextField';
import muiToggleButton from './muiToggleButton';
import muiToggleButtonGroup from './muiToggleButtonGroup';
import muiToolbar from './muiToolbar';
import muiTooltip from './muiTooltip';
import muiTouchRipple from './muiTouchRipple';
import muiTypography from './muiTypography';
import muiUseMediaQuery from './muiUseMediaQuery';
import type { ComponentOptions } from './options';

export type { ComponentOptions } from './options';

export function components(theme: Theme): ComponentOptions {
  return {
    ...muiAlert(theme),
    ...muiAlertTitle(theme),
    ...muiAppBar(theme),
    ...muiAutocomplete(theme),
    ...muiAvatar(theme),
    ...muiAvatarGroup(theme),
    ...muiBackdrop(theme),
    ...muiBadge(theme),
    ...muiBottomNavigation(theme),
    ...muiBottomNavigationAction(theme),
    ...muiBreadcrumbs(theme),
    ...muiButton(theme),
    ...muiButtonBase(theme),
    ...muiButtonGroup(theme),
    ...muiCard(theme),
    ...muiCardActionArea(theme),
    ...muiCardActions(theme),
    ...muiCardContent(theme),
    ...muiCardHeader(theme),
    ...muiCardMedia(theme),
    ...muiCheckbox(theme),
    ...muiChip(theme),
    ...muiCircularProgress(theme),
    ...muiCollapse(theme),
    ...muiContainer(theme),
    ...muiCssBaseline(theme),
    ...muiDialog(theme),
    ...muiDialogActions(theme),
    ...muiDialogContent(theme),
    ...muiDialogContentText(theme),
    ...muiDialogTitle(theme),
    ...muiDivider(theme),
    ...muiDrawer(theme),
    ...muiAccordion(theme),
    ...muiAccordionActions(theme),
    ...muiAccordionDetails(theme),
    ...muiAccordionSummary(theme),
    ...muiFab(theme),
    ...muiFilledInput(theme),
    ...muiFormControl(theme),
    ...muiFormControlLabel(theme),
    ...muiFormGroup(theme),
    ...muiFormHelperText(theme),
    ...muiFormLabel(theme),
    ...muiGrid(theme),
    ...muiImageList(theme),
    ...muiImageListItem(theme),
    ...muiImageListItemBar(theme),
    ...muiIcon(theme),
    ...muiIconButton(theme),
    ...muiInput(theme),
    ...muiInputAdornment(theme),
    ...muiInputBase(theme),
    ...muiInputLabel(theme),
    ...muiLinearProgress(theme),
    ...muiLink(theme),
    ...muiList(theme),
    ...muiListItem(theme),
    ...muiListItemButton(theme),
    ...muiListItemAvatar(theme),
    ...muiListItemIcon(theme),
    ...muiListItemSecondaryAction(theme),
    ...muiListItemText(theme),
    ...muiListSubheader(theme),
    ...muiMenu(theme),
    ...muiMenuItem(theme),
    ...muiMobileStepper(theme),
    ...muiModal(theme),
    ...muiNativeSelect(theme),
    ...muiOutlinedInput(theme),
    ...muiPagination(theme),
    ...muiPaginationItem(theme),
    ...muiPaper(theme),
    ...muiPopover(theme),
    ...muiRadio(theme),
    ...muiRating(theme),
    ...muiScopedCssBaseline(theme),
    ...muiSelect(theme),
    ...muiSkeleton(theme),
    ...muiSlider(theme),
    ...muiSnackbar(theme),
    ...muiSnackbarContent(theme),
    ...muiSpeedDial(theme),
    ...muiSpeedDialAction(theme),
    ...muiSpeedDialIcon(theme),
    ...muiStack(theme),
    ...muiStep(theme),
    ...muiStepButton(theme),
    ...muiStepConnector(theme),
    ...muiStepContent(theme),
    ...muiStepIcon(theme),
    ...muiStepLabel(theme),
    ...muiStepper(theme),
    ...muiSvgIcon(theme),
    ...muiSwitch(theme),
    ...muiTab(theme),
    ...muiTable(theme),
    ...muiTableBody(theme),
    ...muiTableCell(theme),
    ...muiTableContainer(theme),
    ...muiTableFooter(theme),
    ...muiTableHead(theme),
    ...muiTablePagination(theme),
    ...muiTableRow(theme),
    ...muiTableSortLabel(theme),
    ...muiTabs(theme),
    ...muiTextField(theme),
    ...muiToggleButton(theme),
    ...muiToggleButtonGroup(theme),
    ...muiToolbar(theme),
    ...muiTooltip(theme),
    ...muiTouchRipple(theme),
    ...muiTypography(theme),
    ...muiUseMediaQuery(theme),
  };
}
