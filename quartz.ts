import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"
<<<<<<< HEAD
=======
import type { ExplorerOptions } from "./.quartz/plugins"
>>>>>>> origin/main

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()

<<<<<<< HEAD
=======

// Custom Filter function for Quartz's Explorer

// Filters files based on their title
// ref: https://quartz.jzhao.xyz/features/explorer
const filterFn: ExplorerOptions["filterFn"] = (node) => {
	// set containing names of everything you want to filter out
	const omit = new Set(["authoring content", "tags", "advanced"])

	// can also use node.slug or by anything on node.data
	// note that node.data is only present for files that exist on disk
	// (e.g. implicit folder nodes that have no associated index.md)
	return !omit.has(node.displayName.toLowerCase())
}

ExternalPlugin.Explorer({
  filterFn: filterFn
})
>>>>>>> origin/main
