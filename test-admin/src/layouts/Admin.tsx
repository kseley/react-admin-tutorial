import clsx from 'clsx'
//import Cookies from '../helpers/Cookies'

import { useState, ErrorInfo, ReactNode, ComponentType, HtmlHTMLAttributes, createElement } from 'react'
import { CoreLayoutProps } from 'ra-core'
import { ErrorBoundary } from 'react-error-boundary'
import { styled, SxProps } from '@mui/material/styles'
i//mport { MultiLevelMenu, AppLocationContext } from '@react-admin/ra-navigation'
import OrganizationIcon from '@mui/icons-material/CorporateFare'
import BoardMemberIcon from '@mui/icons-material/Diversity3'
import AdminAppBar from './components/AdminAppBar'
import EmployeeIcon from '@mui/icons-material/Engineering'
import PolicyIcon from '@mui/icons-material/ContentCopy'
import VehicleIcon from '@mui/icons-material/DirectionsCar'
import UsersIcon from '@mui/icons-material/People'
import PropertyIcon from '@mui/icons-material/HomeWork'
import InlandMarineIcon from '@mui/icons-material/RvHookup'
import RateTableIcon from '@mui/icons-material/LocalAtm'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote'
import AddchartIcon from '@mui/icons-material/Addchart'
import BiotechIcon from '@mui/icons-material/Biotech'
import BlurCircularIcon from '@mui/icons-material/BlurCircular'
import BorderHorizontalIcon from '@mui/icons-material/BorderHorizontal'
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining'
import BroadcastOnHomeIcon from '@mui/icons-material/BroadcastOnHome'
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto'
import CabinIcon from '@mui/icons-material/Cabin'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import SettingsIcon from '@mui/icons-material/Settings'
import {
	AppBarProps,
	Sidebar as DefaultSidebar,
	MenuProps,
	Error,
	ErrorProps,
	SkipNavigationButton,
	useSidebarState,
	Inspector,
} from 'react-admin'

//const userRole: string | null = Cookies.getCookie('role') ? Cookies.getCookie('role') : 'Guest'

//https://www.makeuseof.com/react-create-collapsible-side-navigation-menu/

const MyMenu = () => {
	return (
		<MultiLevelMenu>
			<MultiLevelMenu.Item name="organizations" to="/organizations" label="Organization" icon={<OrganizationIcon />} />
			<MultiLevelMenu.Item name="users" to="/users" label="Users" icon={<UsersIcon />} />
			<MultiLevelMenu.Item name="policies" to="/policies" label="Policies" icon={<PolicyIcon />} />
			<MultiLevelMenu.Item name="board-members" to="/board-members" label="Board Members" icon={<BoardMemberIcon />} />
			<MultiLevelMenu.Item name="employees" to="/employees" label="Employees" icon={<EmployeeIcon />} />
			<MultiLevelMenu.Item name="properties" to="/properties" label="Properties" icon={<PropertyIcon />} />
			<MultiLevelMenu.Item name="vehicles" to="/vehicles" label="Vehicles" icon={<VehicleIcon />} />
			<MultiLevelMenu.Item name="claim-infos" to="/claim-infos" label="Claim" icon={<AssistantPhotoIcon />} />
			<MultiLevelMenu.Item
				name="inland-marines"
				to="/inland-marines"
				label="Inland Marines"
				icon={<InlandMarineIcon />}
			/>
			<MultiLevelMenu.Item
				name="quote-a-request"
				to="/quote-request"
				label="Quote Wizard"
				icon={<RequestQuoteIcon />}
			/>
			<MultiLevelMenu.Item name="file-a-claim" to="/file-a-claim" label="File Claim" icon={<AddchartIcon />} />

			{/* The empty filter is required to avoid falling back to the previously set filter */}

			{userRole === 'Admin' && (
				<>
					<MultiLevelMenu.Item name="settings" to="/admin/settings" label="Settings" icon={<SettingsIcon />} />
					<MultiLevelMenu.Item name="table" label="Products Rates" icon={<RateTableIcon />}>
						<MultiLevelMenu.Item
							name="vehicle-rates"
							to="/admin/vehicle-rates"
							label="Automobile"
							icon={<BiotechIcon />}
						/>
						<MultiLevelMenu.Item
							icon={<BlurCircularIcon />}
							name="director-officer-rates"
							to={'/admin/director-officer-rates'}
							label="Directors & Officers Rate"
						/>
						<MultiLevelMenu.Item
							icon={<BorderHorizontalIcon />}
							name="employment-rates"
							to={'/admin/employment-rates'}
							label="Employment"
						/>
						<MultiLevelMenu.Item
							icon={<BreakfastDiningIcon />}
							name="employee-rates"
							to={'/admin/employee-rates'}
							label="Employee"
						/>
						<MultiLevelMenu.Item
							icon={<BroadcastOnHomeIcon />}
							name="general-liability-rates"
							to={'/admin/general-liability-rates'}
							label="General Liability"
						/>
						<MultiLevelMenu.Item
							icon={<CabinIcon />}
							name="inland-marine-rates"
							to="/admin/inland-marine-rates"
							label="Inland Marine"
						/>
						<MultiLevelMenu.Item
							icon={<CatchingPokemonIcon />}
							name="property-rates"
							to="/admin/property-rates"
							label="Property"
						/>
					</MultiLevelMenu.Item>
				</>
			)}
		</MultiLevelMenu>
	)
}

export default (props: LayoutProps) => {
	const {
		appBar: AppBar = AdminAppBar,
		children,
		className,
		dashboard,
		error: errorComponent,
		menu: Menu = MyMenu,
		sidebar: Sidebar = DefaultSidebar,
		title,
		...rest
	} = props

	const [open] = useSidebarState()
	const [errorInfo, setErrorInfo] = useState<ErrorInfo>()

	const handleError = (error: Error, info: ErrorInfo) => {
		setErrorInfo(info)
	}

	return (
		<AppLocationContext>
			<StyledLayout className={clsx('layout', className)} {...rest}>
				<SkipNavigationButton />
				<div className={LayoutClasses.appFrame}>
					<AppBar open={open} title={title} />
					<main className={LayoutClasses.contentWithSidebar}>
						<Sidebar>
							<Menu hasDashboard={!!dashboard} />
						</Sidebar>
						<div id="main-content" className={LayoutClasses.content}>
							<ErrorBoundary
								onError={handleError}
								fallbackRender={({ error, resetErrorBoundary }) => (
									<Error
										error={error}
										errorComponent={errorComponent}
										errorInfo={errorInfo}
										resetErrorBoundary={resetErrorBoundary}
										title={title}
									/>
								)}
							>
								{children}
							</ErrorBoundary>
						</div>
					</main>
					<Inspector />
				</div>
			</StyledLayout>
		</AppLocationContext>
	)
}

export interface LayoutProps extends CoreLayoutProps, Omit<HtmlHTMLAttributes<HTMLDivElement>, 'title'> {
	appBar?: ComponentType<AppBarProps>
	className?: string
	error?: ComponentType<ErrorProps>
	menu?: ComponentType<MenuProps>
	sidebar?: ComponentType<{ children: ReactNode }>
	sx?: SxProps
}

export interface LayoutState {
	hasError: boolean
	error?: Error
	errorInfo?: ErrorInfo
}

const PREFIX = 'RaLayout'
export const LayoutClasses = {
	appFrame: `${PREFIX}-appFrame`,
	contentWithSidebar: `${PREFIX}-contentWithSidebar`,
	content: `${PREFIX}-content`,
}

const StyledLayout = styled('div', {
	name: PREFIX,
	overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	zIndex: 1,
	minHeight: '100vh',
	backgroundColor: theme.palette.background.default,
	position: 'relative',
	minWidth: 'fit-content',
	width: '100%',
	color: theme.palette.getContrastText(theme.palette.background.default),

	[`& .${LayoutClasses.appFrame}`]: {
		display: 'flex',
		flexDirection: 'column',
		flexGrow: 1,
		marginTop: theme.spacing(6),
		[theme.breakpoints.down('sm')]: {
			marginTop: theme.spacing(7),
		},
	},
	[`& .${LayoutClasses.contentWithSidebar}`]: {
		display: 'flex',
		flexGrow: 1,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	[`& .${LayoutClasses.content}`]: {
		backgroundColor: theme.palette.background.default,
		zIndex: 2,
		display: 'flex',
		flexDirection: 'column',
		flexGrow: 1,
		flexBasis: 0,
		padding: 0,
		[theme.breakpoints.up('xs')]: {
			paddingRight: theme.spacing(2),
			paddingLeft: theme.spacing(1),
		},
	},
}))