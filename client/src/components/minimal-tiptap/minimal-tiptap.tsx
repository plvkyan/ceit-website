import * as React from "react"
import "./styles/index.css"

import type { Content, Editor } from "@tiptap/react"
import type { UseMinimalTiptapEditorProps } from "./hooks/use-minimal-tiptap"
import { EditorContent } from "@tiptap/react"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { SectionOne } from "./components/section/one"
import { SectionTwo } from "./components/section/two"
import { SectionThree } from "./components/section/three"
import { SectionFour } from "./components/section/four"
import { SectionFive } from "./components/section/five"
import { LinkBubbleMenu } from "./components/bubble-menu/link-bubble-menu"
import { useMinimalTiptapEditor } from "./hooks/use-minimal-tiptap"
import { MeasuredContainer } from "./components/measured-container"

export interface MinimalTiptapProps
  extends Omit<UseMinimalTiptapEditorProps, "onUpdate"> {
  value?: Content
  onChange?: (value: Content) => void
  className?: string
  editorContentClassName?: string
}

const Toolbar = ({ editor }: { editor: Editor }) => (
  <div className="mt-6 mb-0 sm:px-8 shrink-0 overflow-auto sm:border rounded-full sm:border-border p-2">
    <div className="flex w-full items-center overflow-auto justify-center gap-px">
      <SectionOne editor={editor} activeLevels={[1, 2, 3, 4, 5, 6]} />

      <Separator orientation="vertical" className="mx-2 h-7 hidden sm:flex" />

      {(() => {
      const [mainActionCount, setMainActionCount] = React.useState(3);
      
      // Effect to handle window resize and set main action count
      React.useEffect(() => {
        const handleResize = () => {
        setMainActionCount(window.innerWidth < 640 ? 0 : 3);
        };
        
        // Set initial value
        handleResize();
        
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Clean up
        return () => window.removeEventListener('resize', handleResize);
      }, []);
      
      return (
        <SectionTwo
        editor={editor}
        activeActions={[
          "bold",
          "italic",
          "underline",
          "strikethrough",
          "code",
          "clearFormatting",
        ]}
        mainActionCount={mainActionCount}
        />
      );
      })()}

      <Separator orientation="vertical" className="mx-2 h-7 hidden sm:flex" />

      <SectionFour
      editor={editor}
      activeActions={["orderedList", "bulletList"]}
      mainActionCount={0}
      />

      <Separator orientation="vertical" className="mx-2 h-7 hidden sm:flex" />

      <SectionFive
      editor={editor}
      activeActions={["codeBlock", "blockquote", "horizontalRule"]}
      mainActionCount={0}
      />
    </div>
  </div>
)

export const MinimalTiptapEditor = React.forwardRef<
  HTMLDivElement,
  MinimalTiptapProps
>(({ value, onChange, className, editorContentClassName, ...props }, ref) => {
  const editor = useMinimalTiptapEditor({
    value,
    onUpdate: onChange,
    ...props,
  })

  if (!editor) {
    return null
  }

  return (
    <MeasuredContainer
      as="div"
      name="editor"
      ref={ref}
      className={cn(
        "flex h-auto min-h-72 w-full flex-col items-center rounded-md border border-input shadow-sm focus-within:border-primary",
        className
      )}
    >
      <Toolbar editor={editor} />

      <EditorContent
        editor={editor}
        className={"w-[100%] max-w-[360px] md:w-[480px] md:max-w-[480px] lg:w-[720px] lg:max-w-[720px] min-h-72 focus:ring-0 " + cn("minimal-tiptap-editor", editorContentClassName)}
      />
      <LinkBubbleMenu editor={editor} />
    </MeasuredContainer>
  )
})

MinimalTiptapEditor.displayName = "MinimalTiptapEditor"

export default MinimalTiptapEditor
